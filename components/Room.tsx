import Image from "next/image";
import React from "react";
import Modal from "./Modal";

export default function Room({ room, noOfDays, startDate, endDate }: any) {
  const total = noOfDays * room.price;
  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  function generateDatabaseDateTime(date) {
    return date.toISOString().replace("T", " ").substring(0, 19);
  }
  const handlePurchase = () => {
    fetch("https://secure.octo.uz/prepare_payment", {
      method: "POST",
      body: JSON.stringify({
        octo_shop_id: 23532,
        octo_secret: "c1ba3629-c5e6-44a1-a7bd-661159abcaaf",
        shop_transaction_id: makeid(24),
        auto_capture: true,
        init_time: generateDatabaseDateTime(new Date()),
        test: true,
        user_data: {
          user_id: "Johnny",
          phone: "9989014567",
          email: "octo@mail.comds",
        },
        total_sum: total,
        currency: "UZS",
        tag: "ticket",
        description: "TEST_PAYMENT",
        basket: [
          {
            position_desc: room.name,
            count: noOfDays,
            price: room.price,
            spic: `${startDate.toDateString()}--${endDate.toDateString()}`,
          },
        ],
        tsp_id: 18,
        return_url: "octo.uz",
        notify_url: "https://notify-url.uz",
        language: "uz",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col bg-white p-3 rounded-sm w-[300px]">
      <Image
        src={room.image}
        alt={room.name}
        width={500}
        height={500}
        className="object-cover"
      />
      <span className="absolute bg-blue-600 py-1 px-3 rounded-sm">
        {Number(noOfDays).toFixed(0)} day(s)
      </span>
      <p>{room.name}</p>
      <p>{room.price}$</p>
      <p>Total:{noOfDays * room.price}$</p>
      <Modal
        room={room}
        startDate={startDate}
        endDate={endDate}
        noOfDays={noOfDays}
      />
    </div>
  );
}
