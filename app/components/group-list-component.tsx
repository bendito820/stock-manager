"use client";

import { client } from "@/app/api/client";
import LoadingListSkeleton from "@/app/components/skeleton/loading-list-skeleton";
import Spinner from "@/app/components/spinner";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import Text from "./text";
import toast from "react-hot-toast";

export default function GroupListComponent() {
  const {
    isLoading,
    error,
    refetch,
    data: groups,
  } = useQuery("groups", () =>
    client
      .get<{ _id: string; name: string }[]>("/groups")
      .then((res) => res.data)
  );

  if (isLoading) return <LoadingListSkeleton />;

  return (
    <div className="space-y-2 max-w-xl rounded-sm">
      {groups?.map((group) => (
        <div
          className="bg-zinc-300 p-2 flex justify-between items-center cursor-pointer hover:font-semibold transition-colors duration-150 rounded-md"
          key={group._id}
        >
          <Text>{group.name}</Text>
          <DeleleteGroupButton refetch={refetch} groupId={group._id} />
        </div>
      ))}
    </div>
  );
}

const DeleleteGroupButton = ({
  groupId,
  refetch,
}: {
  groupId: string;
  refetch: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await client.delete(`/groups/${groupId}`);
      setLoading(false);
      toast.success("Grupo apagado com successo");
      refetch();
      // router.push("/products");
    } catch (error) {
      setLoading(false);
      toast.error("Não foi possivel apagar o grupo");
    }
  };
  return (
    <button
      disabled={loading}
      onClick={() => handleDelete()}
      className="p-2 bg-red-200 hover:bg-red-400 rounded-md"
    >
      {loading ? <Spinner /> : <FaRegTrashAlt />}
    </button>
  );
};
