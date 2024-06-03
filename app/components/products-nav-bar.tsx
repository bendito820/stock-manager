"use client";

import Link from "next/link";
import React from "react";
import NewProductButton from "@/app/components/add-new-product-button";
import { usePathname } from "next/navigation";

const links: {
  label: string;
  href: string;
}[] = [
  { label: "Produtos", href: "/products" },
  { label: "Grupos", href: "/products/groups" },
  { label: "Stock", href: "/products/stock" },
  { label: "Movimentos", href: "/products/moviments" },
];

export default function ProductsNavBar() {
  const currentPath = usePathname();
  return (
    <div className="space-y-2">
      <div className="md:hidden">
        <NewProductButton />
      </div>

      <div className="bg-zinc-300 p-2 flex flex-row justify-between rounded-md">
        {links.map((link) => (
          <button
            key={link.href}
            className="p-2 transition-colors duration-150"
          >
            <Link
              className={`${
                currentPath === link.href ? "font-bold" : ""
              } text-emerald-800 hover:text-emerald-900 ease-in-out hover:font-semibold focus:text-success-600 active:text-emerald-900 text-sm text-decoration-line: underline`}
              href={link.href}
            >
              {link.label}
            </Link>
          </button>
        ))}

        <div className="hidden md:block">
          <NewProductButton />
        </div>
      </div>
    </div>
  );
}
