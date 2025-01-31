"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import rooms from "../constants/rooms";
import Room from "../components/Room";
export default function Index() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [noOfRooms, setNoOfRooms] = useState("1");
  const [person, setPerson] = useState("1");
  const [searched, setSearched] = useState(false);
  const [selection, setSelection] = useState();
  const [days, setDays] = useState(1);
  const oneDay = 24 * 60 * 60 * 1000;
  useEffect(() => {
    const days = Math.abs((startDate.getTime() - endDate.getTime()) / oneDay);
    setDays(days);
  }, [startDate, endDate]);

  const handleSearch = () => {
    if (Number(days.toFixed(0)) > 0 && noOfRooms && person) {
      setSearched(true);
    }
  };
  return (
    <div
      style={{
        backgroundImage: "url('/images/shapes.jpg')",
      }}
      className="flex items-center w-screen min-h-[100vh] flex-col bg-cover bg-center backdrop-blur-md bg-no-repeat px-8"
    >
      <div className="border rounded-sm  w-full flex bg-white items-center mt-20 justify-evenly px-8 py-6">
        <div>
          <p>Check in</p>
          <DatePicker
            selected={startDate}
            className=" focus:outline-none"
            selectsStart
            selectsRange
            onSelect={(date) => setStartDate(date)}
            value={startDate.toDateString()}
          />
        </div>
        <div>
          <p>Check in</p>
          <DatePicker
            className=" focus:outline-none"
            selected={endDate}
            selectsEnd
            selectsRange
            startDate={startDate}
            onSelect={(date) => {
              if (
                Math.abs((startDate.getTime() - date.getTime()) / oneDay) > 0
              ) {
                setEndDate(date);
              }
            }}
            value={endDate.toDateString()}
          />
        </div>

        <div className="bg-white">
          <p>Rooms</p>
          <input
            type="number"
            value={noOfRooms}
            onChange={(e) => setNoOfRooms(e.target.value)}
          />
        </div>
        <div>
          <p>Guests</p>
          <input
            type="number"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />
        </div>
        <div className="w-2/12">
          <button
            className="rounded-lg border bg-blue-500 text-white px-12 py-3"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
      </div>

      {searched && (
        <div className="w-full flex items-center justify-evenly flex-wrap gap-5 my-8 ">
          {rooms.map((item, id) => (
            <Room
              key={id}
              room={item}
              startDate={startDate}
              endDate={endDate}
              noOfDays={days.toFixed(0)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
