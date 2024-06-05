"use client";

import { client } from "@/app/api/client";
import Spinner from "@/app/components/spinner";
import Text from "@/app/components/text";
import React from "react";
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
  const {
    isLoading,
    error,
    refetch,
    data: stock,
  } = useQuery("stock-detail", () =>
    client.get<Stock>(`/stock/${params.stockId}/stock`).then((res) => res.data)
  );

  if (isLoading) return <Spinner />;

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
    </section>
  );
}
