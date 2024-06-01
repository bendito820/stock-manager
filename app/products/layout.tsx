import React from "react";
import Header from "@/app/components/header";
import Text from "@/app/components/text";
import NewProductButton from "@/app/components/add-new-product-button";

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="mt-6 ">
        <div className="space-y-6 max-w-xl">
          <Header>Produtos</Header>
          <Text>
            Todos os produtos que a empresa possui armazenados. Tanto as
            matérias-primas como os produtos acabados
          </Text>
          <NewProductButton />
        </div>
      </div>
      {children}
    </div>
  );
}
