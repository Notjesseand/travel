import React from "react";
import { topDestinations } from "../../components/home/data";

async function getData() {
  const res = await fetch(
    "https://res.cloudinary.com/dv62ty87r/image/upload/v1715920657/Los-Angeles_gtzlwh.jpg"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log(res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json;
}

export default async function Page() {
  // const data = await getData();

  return (
    <main>
      <p className="text-2xl text-center py-10 font-custom">Top Destinations</p>
      <div className="grid grid-cols-3 mx-auto justify-center gap-y-7 px-8">
        {topDestinations.map((item: any, index: number) => (
          <div
            className="mx-auto bg-pink-400 w-11/12 aspect-[4/3] rounded relative flex flex-col justify-center bg-cover"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* overlay */}
            <div className="absolute h-full w-full bg-black opacity-40 hover:opacity-20"></div>

            <div className="relative  ">
              <p className="flex text-2xl font-montserrat font-extrabold justify-center">
                {" "}
                {item.city}
              </p>
              <div className="flex gap-5 justify-center">
                <span>{item.hotels}</span>
                <span>{item.tours}</span>
                <span>{item.rentals}</span>
                <span>{item.cars}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
