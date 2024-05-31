import Link from "next/link";
import React from "react";

export default function NewProductButton() {
  return (
    <button className="text-white text-sm bg-emerald-800 hover:bg-emerald-700 transition-colors duration-200 p-2 rounded">
      <Link href={"/products/new"}>Novo Producto</Link>
    </button>
  );
}
