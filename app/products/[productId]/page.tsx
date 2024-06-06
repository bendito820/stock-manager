"use client";

import { client } from "@/app/api/client";
import Spinner from "@/app/components/spinner";
import Text from "@/app/components/text";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";

export default function ProductsDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const router = useRouter();

  const {
    isLoading,
    error,
    refetch,
    data: products,
  } = useQuery({
    queryKey: "product-details",
    queryFn: () =>
      client.get<any>(`/stock/${params.productId}`).then((res) => res.data),
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <Spinner />;

  return (
    <section className="mt-6  max-w-xl ">
      {products && (
        <div className="space-y-6">
          {products?.map((product: any) => (
            <div
              key={product._id}
              className="space-y-6 bg-zinc-100 rounded-2xl p-4 shadow-md"
            >
              <h2 className="text-xl">{product?.lote}</h2>

              <div>
                <Text>Quantidade em Stock: {product?.quantity}</Text>
              </div>
              <div>
                <Text>Data de Fabricação:</Text>
                <p className="text-zinc-400 text-sm">{product?.date.buildAt}</p>
              </div>
              <div>
                <Text>Data de Expiração:</Text>
                <p className="text-zinc-400 text-sm underline">
                  {product?.date.expireAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
