import Skeleton from "@/app/components/skeleton/skeleton";
import Text from "@/app/components/text";

const products: {}[] = [{}, {}];

export default function ProductDetailsSkeleton() {
  return (
    <div className="space-y-6 mt-6  max-w-xl">
      {products?.map((product: any, index) => (
        <div
          key={index}
          className="space-y-6 bg-zinc-100 rounded-2xl p-4 shadow-md"
        >
          <Skeleton />

          <div className="max-w-56">
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
      ))}
    </div>
  );
}
