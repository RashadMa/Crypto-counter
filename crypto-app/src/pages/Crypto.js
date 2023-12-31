import React from "react";
import Table from "../components/Table";
import FilteredItems from "../components/FilteredItems";
import { Outlet } from "react-router-dom";

const Crypto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <FilteredItems />
      <Table />
      <Outlet />
    </section>
  );
};

export default Crypto;
