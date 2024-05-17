import React from "react";
import { topDestinations } from "../../components/home/data";
import Link from "next/link";

const TopDestinations = () => {
  return (
    <main className="py-6">
      <p className="text-2xl text-center py-10 font-custom">Top Destinations</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center gap-y-8 px-8">
        {topDestinations.map((item: any, index: number) => (
          <div
            className="mx-auto bg-pink-400 w-11/12 aspect-[4/3] rounded relative flex flex-col justify-center bg-cover"
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* overlay */}
            <div className="absolute h-full w-full bg-black opacity-40 hover:opacity-20"></div>

            <div className="relative  px-5 text-center">
              <Link
                href={`/destinations/${item.city.replace(/\s+/g, "")}`}
                className=""
              >
                <p className="flex text-2xl font-montserrat font-extrabold justify-center">
                  {" "}
                  {item.city}
                </p>
              </Link>
              <div className="flex gap-5 text-center">
                <span>{item.hotels} hotels</span>
                <span>{item.tours} tours</span>
                <span>{item.rentals} rentals</span>
                <span>{item.cars} cars</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TopDestinations;

// export default async function Page() {
//   // const data = await getData();

// }
