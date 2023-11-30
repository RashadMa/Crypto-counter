import { createContext, useLayoutEffect, useState } from "react";
import axios from "axios";
export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [data, setData] = useState();
  const [searchedData, setSearchedData] = useState();
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("Eur");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(250);
  const [perPage, setPerPage] = useState(10);

  const getCryptos = async () => {
    try {
      const data = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
        .then((res) => res.json())
        .then((json) => json);
      setTotalPages(data.length);
    } catch (error) {
      console.log(error);
    }

    try {
      let res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      if (res) {
        setData(res.data);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getSearchedCryptos = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);
      setSearchedData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setPage(1)
    setSearchedData('')
  }

  useLayoutEffect(() => {
    getCryptos();
  }, [coinSearch, currency, sortBy, page, perPage]);

  return (
    <CryptoContext.Provider
      value={{
        data,
        searchedData,
        getSearchedCryptos,
        setCoinSearch,
        setSearchedData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPages,
        reset,
        setPerPage,
        perPage
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
