"use client";

import { client } from "@/app/api/client";
import Spinner from "@/app/components/spinner";
import { useQuery } from "react-query";
import Text from "./text";

export default function GroupListComponent() {
  const {
    isLoading,
    error,
    data: groups,
  } = useQuery("groups", () =>
    client
      .get<{ _id: string; name: string }[]>("/groups")
      .then((res) => res.data)
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="space-y-2 max-w-xl rounded-sm">
      {groups?.map((group) => (
        <div
          className="bg-zinc-300 p-2 cursor-pointer hover:font-semibold transition-colors duration-150"
          key={group._id}
        >
          <Text>{group.name}</Text>
        </div>
      ))}
    </div>
  );
}
