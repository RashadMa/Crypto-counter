import { createContext, useLayoutEffect, useState } from "react";
import axios from "axios";
export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [data, setData] = useState();
  const [searchedData, setSearchedData] = useState();
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("Eur");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  const getCryptos = async () => {
    try {
      let res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
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
    // try {
    //   let res = await axios.get(
    //     `https://api.coingecko.com/api/v3/search?query=${query}`
    //   );
    //   if (res) {
    //     console.log("123", res);
    //     setSearchedData(res.data.data.coins);
    //   } else {
    //     throw new Error();
    //   }
    // } catch (error) {
    //   console.log("Error: ", error);
    // }
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

  useLayoutEffect(() => {
    getCryptos();
  }, [coinSearch, currency, sortBy]);

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
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
