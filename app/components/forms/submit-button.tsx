import React from "react";
import Spinner from "../spinner";

export default function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors duration-150"
    >
      {loading ? <Spinner /> : "Salvar"}
    </button>
  );
}
