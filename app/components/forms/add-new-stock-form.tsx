"use client";

import { client } from "@/app/api/client";
import InputField from "@/app/components/input-field";
import Label from "@/app/components/label-form";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Select from "react-select";
import SubmitButton from "@/app/components/forms/submit-button";
import { DatePicker } from "antd";

export default function AddNewStockForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [buildAt, setBuildAt] = useState<any>(new Date());
  const [expireAt, setExpireAt] = useState<any>(new Date());

  const router = useRouter();
  const { handleSubmit, control } = useForm();

  const { data: products } = useQuery("products", () =>
    client
      .get<{ _id: string; name: string }[]>("/product")
      .then((res) => res.data)
  );

  const options: { label: string; value: string }[] =
    products?.map((item) => ({
      value: item._id,
      label: item.name,
    })) || [];

  const onSubmit = async (data: any) => {
    const newStock = {
      lote: data.lote,
      productId: data.productId,
      quantity: Number(data.quantity),
      date: {
        expireAt,
        buildAt,
      },
    };

    try {
      setLoading(true);
      await client.post("/stock", newStock);
      router.push("/products/stock");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
        <div className="mb-5">
          <Label text="Selecione o Grupo de Produtos" />
          <Controller
            control={control}
            name="productId"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                defaultInputValue=""
                name="value"
                options={options}
                classNamePrefix="select"
                onChange={(data) => {
                  onChange(data?.value!);
                }}
              />
            )}
          />
        </div>

        <div className="mb-5">
          <Label text="Inserir Lote" />
          <Controller
            control={control}
            name="lote"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <InputField
                value={value}
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
                type="name"
                id="name"
                placeholder="Lote..."
                required
              />
            )}
          />
        </div>

        <div className="mb-5 max-w-32">
          <Label text="Inserir Quantidade" />
          <Controller
            control={control}
            name="quantity"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <InputField
                value={value}
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
                type="name"
                id="quantity"
                placeholder="Quantidade..."
                required
              />
            )}
          />
        </div>

        <div className="flex justify-around items-center">
          <div className="mb-5">
            <Label text="Data de Fabricação" />
            <DatePicker onChange={(data: any) => setBuildAt(data)} />
          </div>
          <div className="mb-5">
            <Label text="Data de Expiração" />
            <DatePicker onChange={(data: any) => setExpireAt(data)} />
          </div>
        </div>

        <p className="text-xs text-zinc-500 my-4">
          <span className="text-red-500">*</span> Campo Obrigatorio
        </p>

        <SubmitButton loading={loading} />
      </form>
    </>
  );
}
