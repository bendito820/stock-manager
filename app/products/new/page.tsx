import Header from "@/app/components/header";
import Text from "@/app/components/text";
import React from "react";

const NewProductPage = () => {
  return (
    <div className="mt-6">
      <div className="space-y-6 max-w-xl">
        <Header>Novo Produto</Header>
        <Text>Adicone novos produtos</Text>
        <Text>
          <span className="text-red-500">*</span> Representa campos obrigatorios
        </Text>
      </div>
    </div>
  );
};

export default NewProductPage;
