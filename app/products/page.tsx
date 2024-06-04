import React from "react";
import Text from "@/app/components/text";
import ProducListComponent from "@/app/components/product-list-component";

const ProductsPage = () => {
  return (
    <div className="mt-6 space-y-4">
      <Text>Todos os Produtos</Text>
      <ProducListComponent />
    </div>
  );
};

export default ProductsPage;
