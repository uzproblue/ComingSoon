import React from "react";
import Image from "next/image";
import Link from "next/link";
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
        <Link href="/publicOffer">Public Offer</Link>
      </div>
      <p>2025</p>
    </div>
  );
}
