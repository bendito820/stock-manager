import React, { PropsWithChildren } from "react";

const Text = ({ children }: PropsWithChildren) => {
  return <p className="text-zinc-500">{children}</p>;
};

export default Text;
