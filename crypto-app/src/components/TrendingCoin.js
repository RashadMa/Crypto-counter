import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();
  const getCoinDetails = (id) => {
    navigate(id);
  };

  return (
    <div
      onClick={() => getCoinDetails(data.id)}
      className="w-[40%] bg-gray-200 mb-12 last:mb-0 rounded-lg
     p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40"
    >
      {data ? (
        <>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">Name:&nbsp;</span>
            <span className="text-cyan">{data.name}</span>
            <img
              className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
              src={data.small}
              alt={data.name}
            />
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              Market cap rank:&nbsp;
            </span>
            <span className="text-cyan">{data.market_cap_rank}</span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              Price (in btc)&nbsp;
            </span>
            <span className="text-cyan">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">Score:&nbsp;</span>
            <span className="text-cyan">{data.score}</span>
          </h3>
        </>
      ) : null}
    </div>
  );
};

export default TrendingCoin;
