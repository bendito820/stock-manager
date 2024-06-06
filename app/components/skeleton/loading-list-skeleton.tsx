import React from "react";
import Skeleton from "@/app/components/skeleton/skeleton";

const products: {}[] = [{}, {}, {}, {}];

export default function LoadingListSkeleton() {
  return (
    <div className="space-y-2 max-w-xl rounded-sm">
      {products?.map((product, index) => (
        <div key={index}>
          <Skeleton height={40} />
        </div>
      ))}
    </div>
  );
}
