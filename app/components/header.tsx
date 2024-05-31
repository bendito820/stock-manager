import React, { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return <h1 className="text-4xl font-semibold text-zinc-800">{children}</h1>;
};

export default Header;
