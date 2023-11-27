import React from "react";
import Table from "../components/Table";
import FilteredItems from "../components/FilteredItems";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <FilteredItems />
      <Table />
    </section>
  );
};

export default Crypto;
