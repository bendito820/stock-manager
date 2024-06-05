"use client";

import { client } from "@/app/api/client";
import SubmitButton from "@/app/components/forms/submit-button";
import InputField from "@/app/components/input-field";
import Label from "@/app/components/label-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface StockOut {
  lote: string;
  quantity: number;
  stockId: string;
  date: {
    expireAt: string;
    buildAt: string;
  };
  refetch: any;
}

export default function StockOutComponent({
  date,
  lote,
  quantity,
  stockId,
  refetch,
}: StockOut) {
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: any) => {
    const newStock = {
      date: {
        buildAt: date.buildAt,
        expireAt: date.expireAt,
      },
      lote,
      quantity:
        quantity >= Number(data.quantity) ? Number(data.quantity) : undefined,
    };

    // console.log(JSON.stringify(newStock));

    try {
      setLoading(true);
      await client.post(`/stock/out/${stockId}`, newStock);
      console.log(stockId);
      setLoading(false);
      refetch();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
        <Label text="Remover quantidade do Stock" />
        <div className="mb-5 max-w-32">
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

        <SubmitButton label="Remover" loading={loading} />
      </form>
    </>
  );
}
