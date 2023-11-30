import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";

const SearchInput = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  let { searchedData, setCoinSearch, setSearchedData } =
    useContext(CryptoContext);

  let hangleChangeInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearch(query);
    handleSearch(query);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  const selectCoin = (item) => {
    setCoinSearch(item);
    setSearch("");
    setSearchedData();
  };

  return (
    <>
      <form
        className="w-96 relative flex items-center ml-7 font-nunito"
        onSubmit={handleSubmit}
      >
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
        <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden bg-gray-200 bg-opacity-60 backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200">
          {searchedData ? (
            searchedData.map((item) => {
              return (
                <li
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  key={item.id}
                  onClick={() => selectCoin(item.id)}
                >
                  <img
                    className="w-[1rem] h-[1rem] mx-1.5"
                    src={item.thumb}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
                role="status"
              />
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchedCryptos } = useContext(CryptoContext);

  const debounceHandle = debounce(function (a) {
    getSearchedCryptos(a);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceHandle} />
    </div>
  );
};

export default Search;
