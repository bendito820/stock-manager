"use client";

import { client } from "@/app/api/client";
import StockDetailsSkeleton from "@/app/components/skeleton/stock-details-skeleton";
import Spinner from "@/app/components/spinner";
import StockOutComponent from "@/app/components/stock-out-component";
import Text from "@/app/components/text";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useQuery } from "react-query";

interface Stock {
  _id: string;
  lote: string;
  quantity: number;
  date: {
    expireAt: string;
    buildAt: string;
  };
}

export default function StockDetailsPage({
  params,
}: {
  params: { stockId: string };
}) {
  const router = useRouter();
  const [rerender, setRerender] = useState<boolean>(false);

  const {
    isLoading,
    error,
    refetch,
    data: stock,
  } = useQuery({
    queryKey: "stock-detail",
    queryFn: () =>
      client
        .get<Stock>(`/stock/${params.stockId}/stock`)
        .then((res) => res.data),
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <StockDetailsSkeleton />;

  return (
    <section className="mt-6 bg-zinc-100 max-w-xl rounded-2xl p-4 shadow-md">
      <div className="space-y-6">
        <h2 className="text-xl">{stock?.lote}</h2>

        <div>
          <Text>Quantidade em Stock: {stock?.quantity}</Text>
        </div>
        <div>
          <Text>Data de Fabricação:</Text>
          <p className="text-zinc-400 text-sm">{stock?.date.buildAt}</p>
        </div>
        <div>
          <Text>Data de Expiração:</Text>
          <p className="text-zinc-400 text-sm underline">
            {stock?.date.expireAt}
          </p>
        </div>
      </div>

      <div className="mt-6">
        {stock && (
          <StockOutComponent
            lote={stock?.lote}
            date={stock?.date}
            quantity={stock.quantity}
            stockId={stock._id}
            refetch={refetch}
          />
        )}
      </div>
    </section>
  );
}
