import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  href: string;
}

export default function AddNewButton({ label, href }: Props) {
  return (
    <button className="text-white text-sm bg-emerald-800 hover:bg-emerald-700 transition-colors duration-200 p-2 rounded">
      <Link href={href}>{label}</Link>
    </button>
  );
}
