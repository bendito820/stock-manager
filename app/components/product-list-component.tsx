"use client";

import { client } from "@/app/api/client";
import Spinner from "@/app/components/spinner";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import Text from "@/app/components/text";

export default function ProducListComponent() {
  const {
    isLoading,
    error,
    refetch,
    data: products,
  } = useQuery("product", () =>
    client
      .get<{ productGroupId: string; name: string; _id: string }[]>("/product")
      .then((res) => res.data)
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="space-y-2 max-w-xl rounded-sm">
      {products?.map((product) => (
        <div
          className="bg-zinc-300 p-2 flex justify-between items-center cursor-pointer hover:font-semibold transition-colors duration-150 rounded-md"
          key={product._id}
        >
          <Text>{product.name}</Text>
          <DeleleteProductButton refetch={refetch} productId={product._id} />
        </div>
      ))}
    </div>
  );
}

const DeleleteProductButton = ({
  productId,
  refetch,
}: {
  productId: string;
  refetch: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await client.delete(`/product/${productId}`);
      setLoading(false);
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
