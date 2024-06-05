import AddNewButton from "@/app/components/add-new-button";
import StockListComponent from "@/app/components/stock-list-component";
import React from "react";

export default function StockPage() {
  return (
    <main className="mt-6">
      <div className="max-w-xl space-y-6">
        <AddNewButton label="Adicionar Stock" href="/products/stock/new" />
        <StockListComponent />
      </div>
    </main>
  );
}
