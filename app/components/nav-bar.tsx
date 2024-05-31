import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="container mx-auto px-4 bg-emerald-800 text-white h-16 flex justify-between items-center">
      <h2 className="font-bold">STOCK</h2>
      <Link href={"/products"}></Link>
    </nav>
  );
};

export default NavBar;
