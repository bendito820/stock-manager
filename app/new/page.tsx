import AddNewProductForm from "@/app/components/forms/add-new-product-form";
import Header from "@/app/components/header";
import Text from "@/app/components/text";

export default function NewProductPage() {
  return (
    <div className="mt-6">
      <div className="space-y-6 max-w-xl">
        <Header>Novo Produto</Header>
        <Text>Adicone novos produtos</Text>
      </div>

      <div className="mt-8">
        <AddNewProductForm />
      </div>
    </div>
  );
}
