import React from "react";
import Text from "../components/Text";
import Header from "../components/header";

const ProductsPage = () => {
  return (
    <div className="mt-6">
      <div className="space-y-6 max-w-xl">
        <Header>Produtos</Header>
        <Text>
          Todos os produtos que a empresa possui armazenados. Tanto as
          matérias-primas como os produtos acabados
        </Text>
      </div>
    </div>
  );
};

export default ProductsPage;
