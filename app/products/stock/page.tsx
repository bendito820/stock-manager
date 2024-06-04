import AddNewButton from "@/app/components/add-new-button";
import React from "react";

export default function StockPage() {
  return (
    <main className="mt-6">
      <div className="max-w-xl">
        <AddNewButton label="Adicionar Stock" href="/products/stock/new" />
      </div>
    </main>
  );
}
