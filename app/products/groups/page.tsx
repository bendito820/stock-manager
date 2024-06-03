import AddNewGroupButton from "@/app/components/add-new-button";

export default function ProductGroupsPage() {
  return (
    <div className="mt-6">
      <div>
        <AddNewGroupButton
          href="/products/groups/new"
          label="Adicionar Grupo"
        />
      </div>
    </div>
  );
}
