import React from "react";

const page = ({ params }: { params: any }) => {
  const data = params.id;
  console.log(params);

  return <div>{data}</div>;
};

export default page;
