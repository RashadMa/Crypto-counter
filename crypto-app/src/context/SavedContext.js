import { createContext, useLayoutEffect, useState } from "react";
export const SavedContext = createContext({});

export const SavedProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);

  const saveCoin = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));

    if (oldCoins.includes(coinId)) {
      return null;
    } else {
      let newCoin = [...oldCoins, coinId];
      setAllCoins(newCoin);
      localStorage.setItem("coins", JSON.stringify(newCoin));
    }
  };

  const removeCoin = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));
    let newCoin = oldCoins.filter((coin) => coin !== coinId);
    setAllCoins(newCoin);
    localStorage.setItem("coins", JSON.stringify(newCoin));
  };

  useLayoutEffect(() => {
    let isThere = JSON.parse(localStorage.getItem("coins")) || false;

    if (!isThere) {
      localStorage.setItem("coins", JSON.stringify([]));
    } else {
      let totalCoins = JSON.parse(localStorage.getItem("coins"));
      setAllCoins(totalCoins);
    }
  }, []);

  return (
    <SavedContext.Provider
      value={{
        saveCoin,
        allCoins,
        removeCoin,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};
