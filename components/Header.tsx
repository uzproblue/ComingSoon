import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full border-b px-8 py-6 flex items-center justify-between">
      <Link href="/">
        <h2 className="text-lg font-bold text-yellow-200 cursor-pointer">
          Suzangaron Hotel
        </h2>
      </Link>
      <div className="flex items-start flex-col justify-start">
        <h4>+998973077977</h4>
        <h4>suzangaronhotel@mail.ru</h4>
      </div>
    </div>
  );
}
