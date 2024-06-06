"use client";

import { client } from "@/app/api/client";
import InputField from "@/app/components/input-field";
import Label from "@/app/components/label-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Select from "react-select";
import SubmitButton from "@/app/components/forms/submit-button";

export default function AddNewProductForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { handleSubmit, control } = useForm();

  const { data: groups } = useQuery("groups", () =>
    client
      .get<{ _id: string; name: string }[]>("/groups")
      .then((res) => res.data)
  );

  const options: { label: string; value: string }[] =
    groups?.map((item) => ({
      value: item._id,
      label: item.name,
    })) || [];

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      await client.post("/product", data);
      router.push("/products");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
        <div className="mb-5">
          <Label text="Inserir nome do produto" />

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <InputField
                value={value}
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
                type="name"
                id="name"
                placeholder="Nome"
                required
              />
            )}
          />
        </div>
        <div className="mb-5">
          <Label text="Selecione Um Grupo" />
          <Controller
            control={control}
            name="productGroupId"
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
        <p className="text-xs text-zinc-500 my-4">
          <span className="text-red-500">*</span> Campo Obrigatorio
        </p>

        <SubmitButton loading={loading} />
      </form>
    </>
  );
}
