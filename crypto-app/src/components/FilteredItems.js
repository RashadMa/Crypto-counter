import React, { useContext, useRef } from "react";
import Search from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";

const FilteredItems = () => {
  const currencyRef = useRef(null);
  let { setCurrency } = useContext(CryptoContext);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let value = currencyRef.current.value;
    setCurrency(value);
    currencyRef.current.value = "";
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
      <div>sorting</div>
    </div>
  );
};

export default FilteredItems;
