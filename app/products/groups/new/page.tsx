import AddNewGroupForm from "@/app/components/forms/add-new-group-form";
import Text from "@/app/components/text";

const NewGroupPage = () => {
  return (
    <div className="mt-6 space-y-6">
      <Text>Criar Novo Grupo</Text>

      <AddNewGroupForm />
    </div>
  );
};

export default NewGroupPage;
