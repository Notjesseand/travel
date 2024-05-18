import { fetchCityData } from "@/api/fetchCity";

export default async function Page({ params }: { params: any }) {
  const { id } = params;

  // Replace hyphens with spaces
  const searchParams = id.replace(/-/g, " ");
  fetchCityData(searchParams);

  const data = await fetchCityData(searchParams);
  console.log(params);
  console.log(data);

  return (
    <main>
      <div className="h-96 bg-pink-400"></div>
      <div className="gap-10  text-lg mt-3 px-16 py-8">
        <span className="gap-4 text-3xl">
          {/* <span className="px-2">City:</span> */}
          {data[0].name}
        </span>
        <p>{data[0].country}</p>
        <p>Population: {data[0].population}</p>
      </div>
    </main>
  );
}
