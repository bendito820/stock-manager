"use client";

import { client } from "@/app/api/client";
import LoadingListSkeleton from "@/app/components/skeleton/loading-list-skeleton";
import Spinner from "@/app/components/spinner";
import Link from "next/link";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import Text from "./text";
import toast from "react-hot-toast";

interface Stock {
  _id: string;
  lote: string;
  quantity: number;
  date: {
    expireAt: string;
    buildAt: string;
  };
}
[];

export default function StockListComponent() {
  const {
    isLoading,
    error,
    refetch,
    data: stocks,
  } = useQuery("stock", () =>
    client.get<any>("/stock").then((res) => res.data)
  );

  if (isLoading) return <LoadingListSkeleton />;

  return (
    <div className="space-y-2 max-w-xl rounded-sm">
      {stocks?.map((stock: Stock) => (
        <div
          className="bg-zinc-300 p-2 flex justify-between items-center cursor-pointer hover:font-semibold transition-colors duration-150 rounded-md"
          key={stock._id}
        >
          <Link href={`/products/stock/${stock._id}`} className="flex gap-4">
            <div className="w-12">
              <Text>{stock.quantity}</Text>
            </div>
            <Text>{stock.lote}</Text>
          </Link>
          <DeleleteGroupButton refetch={refetch} groupId={stock._id} />
        </div>
      ))}
    </div>
  );
}

const DeleleteGroupButton = ({
  groupId: stockId,
  refetch,
}: {
  groupId: string;
  refetch: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await client.delete(`/stock/${stockId}`);
      setLoading(false);
      toast.success("Grupo apagado com successo");
      refetch();
      // router.push("/products");
    } catch (error) {
      setLoading(false);
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
