import React, { PropsWithChildren, ReactNode } from "react";

const Text = ({ children }: PropsWithChildren) => {
  return <p className={"text-zinc-800"}>{children}</p>;
};

export default Text;
