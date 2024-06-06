import Skeleton from "@/app/components/skeleton/skeleton";
import Text from "../text";

const products: {}[] = [{}, {}];

export default function StockDetailsSkeleton() {
  return (
    <section className="mt-6 bg-zinc-100 max-w-xl rounded-2xl p-4 shadow-md">
      <div className="space-y-6">
        <Skeleton />

        <div className="max-w-60">
          <Skeleton />
        </div>

        <div className="max-w-44">
          <p className="text-zinc-300">Data de Fabricação:</p>
          <Skeleton />
        </div>
        <div className="max-w-44">
          <p className="text-zinc-300">Data de Expiração:</p>
          <Skeleton />
        </div>
      </div>

      <div className="mt-6">
        <Skeleton height={40} />
      </div>

      <div className="mt-6 max-w-24">
        <Skeleton height={30} />
      </div>
    </section>
  );
}
