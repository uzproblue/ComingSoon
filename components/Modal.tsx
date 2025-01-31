import React, { useState } from "react";

export default function Modal({ room, noOfDays, startDate, endDate }) {
  const [open, setOpen] = useState(false);
  const total = noOfDays * room.price;
  function generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 =
      (typeof performance !== "undefined" &&
        performance.now &&
        performance.now() * 1000) ||
      0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }

  function generateDatabaseDateTime(date) {
    return date.toISOString().replace("T", " ").substring(0, 19);
  }
  const handlePurchase = () => {
    const id = generateUUID();
    localStorage.setItem("id", id);
    fetch("https://secure.octo.uz/prepare_payment", {
      method: "POST",
      body: JSON.stringify({
        octo_shop_id: 23532,
        octo_secret: "c1ba3629-c5e6-44a1-a7bd-661159abcaaf",
        shop_transaction_id: id,
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
        description: "TEST_PAYMENT",
        basket: [
          {
            position_desc: room.name,
            count: Number(noOfDays),
            price: room.price,
          },
        ],
        return_url: "https://suzangaronhotel.com/paid",
        language: "uz",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.open(data.data.octo_pay_url, "_blank").focus();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="py-2 w-full bg-blue-500 text-white mt-3"
      >
        Choose
      </button>
      {open && (
        <div className="w-screen h-screen bg-black bg-opacity-50 z-50 fixed left-0 top-0  flex items-center justify-center">
          <form
            className="w-[500px] py-10 bg-white p-8 flex flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-lg font-medium">Enter your details</h1>
            <label className="mt-5 mb-2">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-200 focus:outline-none rounded-sm py-1 px-3"
            />

            <label className="mt-5 mb-2">Surname</label>
            <input
              type="text"
              placeholder="Surname"
              className="border border-gray-200 focus:outline-none rounded-sm py-1 px-3"
            />
            <label className="mt-5 mb-2">email</label>
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-200 focus:outline-none rounded-sm py-1 px-3"
            />
            <p className="mt-8 flex gap-1">
              <input type="checkbox" />
              Accept Public agreement
            </p>

            <button
              onClick={() => handlePurchase()}
              className="py-2 w-full bg-blue-500 text-white mt-3"
            >
              Choose
            </button>
          </form>
        </div>
      )}
    </>
  );
}
