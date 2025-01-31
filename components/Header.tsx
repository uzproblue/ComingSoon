import React from "react";

export default function Header() {
  return (
    <div className="w-full border-b px-8 py-6 flex items-center justify-between">
      <h2 className="text-lg font-bold text-yellow-200">Suzangaron Hotel</h2>
      <div className="flex items-start flex-col justify-start">
        <h4>+998787878787</h4>
        <h4>suzangaronhotel@mail.ru</h4>
      </div>
    </div>
  );
}
