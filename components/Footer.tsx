import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className=" flex items-center justify-start gap-5 p-4 ">
      <Image
        src="/images/visa.png"
        alt="visa"
        width={65}
        height={35}
        className="object-contain"
      />
      <Image
        src="/images/mastercard.png"
        alt="visa"
        width={65}
        height={35}
        className="object-contain"
      />
      <Image
        src="/images/humo.png"
        alt="visa"
        width={65}
        height={35}
        className="object-contain"
      />
      <Image
        src="/images/uzcard.png"
        alt="visa"
        width={65}
        height={35}
        className="object-contain"
      />
      <div className="w-full flex justify-center">
        <p>2024</p>
      </div>
    </div>
  );
}
