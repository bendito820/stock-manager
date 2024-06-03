import React, { PropsWithChildren } from "react";
import InputField from "./input-field";
import Label from "./label-form";

export default function AddNewProductForm() {
  return (
    <form className="max-w-md">
      <div className="mb-5">
        <Label text="* Your Email" />
        <InputField
          type="email"
          id="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div className="mb-5">
        <Label text=" * Your password" />
        <InputField type="password" id="password" required />
      </div>
      <p className="text-xs text-zinc-500 my-4">
        <span className="text-red-500">*</span> Campo Obrigatorio
      </p>

      <button
        type="submit"
        className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors duration-150"
      >
        Submit
      </button>
    </form>
  );
}
