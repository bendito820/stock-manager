import AddNewGroupButton from "@/app/components/add-new-button";
import GroupListComponent from "@/app/components/group-list-component";

export default function ProductGroupsPage() {
  return (
    <div className="mt-6">
      <AddNewGroupButton href="/products/groups/new" label="Adicionar Grupo" />

      <div className="mt-8">
        <GroupListComponent />
      </div>
    </div>
  );
}
