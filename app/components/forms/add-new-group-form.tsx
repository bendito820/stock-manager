"use client";

import { client } from "@/app/api/client";
import InputField from "@/app/components/input-field";
import Label from "@/app/components/label-form";
import Spinner from "@/app/components/spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function AddNewGroupForm() {
  const { handleSubmit, control } = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      await client.post("/groups", data);
      setLoading(false);
      router.back();
    } catch (error) {
      setLoading(false);
      // Show toas component Here!
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
      <div className="mb-5">
        <Label text="Titulo do Grupo" />

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputField
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched/blur
              type="name"
              id="text"
              placeholder="Insira o Titulo"
              required
            />
          )}
        />
      </div>

      <p className="text-xs text-zinc-500 my-4">
        <span className="text-red-500">*</span> Campo Obrigatorio
      </p>

      <button
        disabled={loading}
        type="submit"
        className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors duration-150"
      >
        {loading ? <Spinner /> : "Salvar"}
      </button>
    </form>
  );
}
