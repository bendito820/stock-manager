import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="px-4 bg-emerald-800 text-white h-16 flex justify-between items-center">
      <div className="container mx-auto max-w-6xl ">
        <h2 className="font-bold px-0 md:px-4">STOCK</h2>
        <Link href={"/products"}></Link>
      </div>
    </nav>
  );
};

export default NavBar;
