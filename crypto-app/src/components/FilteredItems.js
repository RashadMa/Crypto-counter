import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import selectIcon from "../assets/select-icon.svg";

const FilteredItems = () => {
  const currencyRef = useRef(null);
  let { setCurrency, setSortBy } = useContext(CryptoContext);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let value = currencyRef.current.value;
    setCurrency(value);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setSortBy(value);
  };

  return (
    <div className="w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative">
      <Search />
      <div className="flex mr-7">
        <form
          onSubmit={handleCurrencySubmit}
          className="relative flex items-center font-nunito mr-12"
        >
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center mr-2 font-bold"
          >
            Currency:
          </label>
          <input
            ref={currencyRef}
            type="text"
            name="currency"
            placeholder="Eur"
            className="w-16 rounded bg-gray-200 placeholder::text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
          />
          <button className="ml-1 cursor-pointer" type="submit">
            <img src={submitIcon} alt="submit" className="w-full h-auto" />
          </button>
        </form>
      </div>
      <label className="relative flex justify-center items-center">
        <span className="font-bold mr-2">Sort by: </span>
        <select
        onClick={handleSort}
          name="sortby"
          className="rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0"
        >
          <option value="market_cap_asc">Market cap asc</option>
          <option value="market_cap_desc">Market cap desc</option>
          <option value="volume_asc">Volume asc</option>
          <option value="volume_desc">Volume desc</option>
          <option value="id_asc">Id asc</option>
          <option value="id_desc">Id desc</option>
        </select>
        <img
          src={selectIcon}
          alt="select"
          className="w-[1rem] h-auto absolute right-1 top-2 pointer-events-none"
        />
      </label>
    </div>
  );
};

export default FilteredItems;
