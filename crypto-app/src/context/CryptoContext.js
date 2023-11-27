import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [data, setData] = useState();
  const [searchedData, setSearchedData] = useState();

  const getCryptos = async () => {
    try {
      let res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en"
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
      let res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      if (res) {
        console.log("123", res);
        setSearchedData(res.data);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getCryptos();
  }, []);

  return (
    <CryptoContext.Provider value={{ data, searchedData, getSearchedCryptos }}>
      {children}
    </CryptoContext.Provider>
  );
};
