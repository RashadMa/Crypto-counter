import React, { useContext, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";

const CryptoDetails = () => {
  let { coinId } = useParams();
  let navigate = useNavigate();
  let { getCoinData, coinData } = useContext(CryptoContext);

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
        {coinData ? <h1>{coinData.id}</h1> : null}
      </div>
    </div>,
    document.getElementById("model")
  );
};

export default CryptoDetails;
