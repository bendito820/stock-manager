"use client";

import { client } from "@/app/api/client";
import Spinner from "@/app/components/spinner";
import Text from "@/app/components/text";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";

export default function MovimentsPage() {
  const router = useRouter();

  const {
    isLoading,
    error,
    refetch,
    data: moviments,
  } = useQuery({
    queryKey: "moviments",
    queryFn: () => client.get<any>(`/moviments`).then((res) => res.data),
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <Spinner />;

  return (
    <section className="mt-6  max-w-xl ">
      {moviments && (
        <div className="space-y-6">
          {moviments?.map((moviment: any) => (
            <div
              key={moviment._id}
              className="space-y-6 bg-zinc-100 rounded-2xl p-4 shadow-md"
            >
              <Text>{moviment?.productStockId}</Text>
              <Text>Tipo: {moviment?.type}</Text>
              <div>
                <Text>Quantidade: {moviment?.quantity}</Text>
              </div>
              <div>
                <Text>Data de Criação:</Text>
                <p className="text-zinc-400 text-sm">{moviment?.createdAt}</p>
              </div>
              <div>
                <Text>Data de Actualização:</Text>
                <p className="text-zinc-400 text-sm underline">
                  {moviment?.updatedAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
