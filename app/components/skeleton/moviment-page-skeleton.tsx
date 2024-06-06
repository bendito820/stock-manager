import React from "react";
import Text from "../text";
import Skeleton from "@/app/components/skeleton/skeleton";

const moviments: {}[] = [{}, {}];

export default function MovimentPageSkeleton() {
  return (
    <div className="space-y-6 mt-6 max-w-xl ">
      {moviments?.map((moviment: any, index) => (
        <div
          key={index}
          className={`space-y-6 bg-zinc-100 rounded-2xl p-4 shadow-md`}
        >
          <div className={`rounded-xl p-4 bg-zinc-300 `}>
            <div className="max-w-52">
              <Skeleton />
            </div>

            <div className="max-w-24">
              <Skeleton />
            </div>
          </div>
          <div>
            <div>
              {/* <p>Quantidade: </p> */}
              <div className="max-w-44">
                <Skeleton />
              </div>
            </div>
          </div>
          <div>
            <Text>Data de Criação:</Text>
            <div className="max-w-44">
              <Skeleton />
            </div>
          </div>
          <div>
            <Text>Data de Actualização:</Text>
            <div className="max-w-44">
              <Skeleton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
