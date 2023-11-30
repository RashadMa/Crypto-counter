import React, { useContext, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";

const CryptoDetails = () => {
  let { coinId } = useParams();
  let navigate = useNavigate();
  let { getCoinData, coinData: data, currency } = useContext(CryptoContext);
  useLayoutEffect(() => {
    getCoinData(coinId);
  }, [coinId]);

  const close = () => {
    navigate("..");
  };

  return ReactDOM.createPortal(
    <div
      onClick={close}
      className="fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter:backdrop-blur-sm flex items-center justify-center font-nunito"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[65%] h-[75%]  bg-gray-300 bg-opacity-75 rounded-lg text-white relative"
      >
        {data ? (
          <div className="flex items-center justify-between h-full w-full p-4">
            <div className="flex flex-col w-[45%] h-full pr-2">
              <div className="flex w-full items-center">
                <img
                  className="w-[3rem] h-[3rem] mx-1.5"
                  src={data.image.large}
                  alt={data.id}
                />
                <h1 className="text-xl capitalize font-medium">{data.name}</h1>
                <span className="text-sm pyo.5 px-2.5 ml-2 bg-cyan text-cyan bg-opacity-25 rounded uppercase">
                  {data.symbol}
                </span>
              </div>

              <div>
                <span>Price</span>
                <div>
                  <span>
                    {Number(
                      data.market_data.price_change_percentage_24h
                    ).toFixed(2)}
                    %
                  </span>
                </div>
              </div>
              <h2>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: currency,
                }).format(data.market_data.current_price[currency])}
              </h2>
            </div>
            <div className="flex flex-col w-[55%] h-full pr-2 bg-green">
              Right
            </div>
          </div>
        ) : null}
      </div>
    </div>,
    document.getElementById("model")
  );
};

export default CryptoDetails;
