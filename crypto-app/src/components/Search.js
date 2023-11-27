import React, { useCallback, useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";

const Search = () => {
  const [search, setSearch] = useState("");
  let { getSearchedCryptos } = useContext(CryptoContext);

  let hangleChangeInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearch(query);
    getSearchedCryptos(query);
  };
  return (
    <>
      <form className="w-96 relative flex items-center ml-7 font-nunito">
        <input
          onChange={hangleChangeInput}
          value={search}
          type="text"
          name="search"
          placeholder="Search..."
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required: outline-0 border border-transparent focus:border-cyan"
        />
        <button className="absolute right-1 cursor-pointer" type="submit">
          <img src={searchIcon} className="w-full h-auto" alt="search" />
        </button>
      </form>

      {search.length > 0 ? (
        <ul className="absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden bg-gray-200 bg-opacity-60 backdrop-blur-md">
          <li>coin</li>
          <li>etherum</li>
        </ul>
      ) : null}
    </>
  );
};

export default Search;
