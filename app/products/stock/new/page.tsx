import StockForm from "@/app/components/forms/add-new-stock-form";
import Text from "@/app/components/text";
import React from "react";

export default function AddNewStockPage() {
  return (
    <section className="pt-6 space-y-6 mb-12">
      <Text>Adicionar novo Item no Stock</Text>
      <StockForm />
    </section>
  );
}
