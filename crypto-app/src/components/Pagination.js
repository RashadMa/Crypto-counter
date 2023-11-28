import React, { useContext } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";

const Pagination = () => {
  let { page, setPage, totalPages } = useContext(CryptoContext);
  const AllPage = Math.ceil(totalPages / 10);

  const nextPage = () => {
    if (page === AllPage) {
      return null;
    } else {
      setPage(page + 1);
    }
  };
  console.log();
  const prevPage = () => {
    if (page === AllPage) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex items-center">
      <ul className="flex items-center justify-end text-sm">
        <li className="flex items-center">
          <button onClick={prevPage} className="outline-0 hover:text-cyan w-8">
            <img
              className="w-full h-auto rotate-180"
              src={paginationArrow}
              alt="arrow"
            />
          </button>
        </li>
        {/* <li>
          <button className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center ">
            ...
          </button>
        </li> */}

        {page - 1 !== 0 ? (
          <li>
            <button
              onClick={prevPage}
              className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
            >
              {page - 1}
            </button>
          </li>
        ) : null}
        <li>
          <button
            disabled
            className="outline-0 rounded-full w-8 h-8 flex items-center justify-center  bg-cyan text-gray-300 mx-1.5"
          >
            {page}
          </button>
        </li>
        {page + 1 !== AllPage && page !== AllPage ? (
          <li>
            <button
              onClick={nextPage}
              className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center  bg-gray-200 mx-1.5"
            >
              {page + 1}
            </button>
          </li>
        ) : null}
        {/* <li>
          <button className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center ">
            ...
          </button>
        </li> */}
        <li>{/* <button>Last page</button> */}</li>
        {page !== AllPage ? (
          <li>
            <button
              onClick={() => setPage(AllPage)}
              className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
            >
              {AllPage}
            </button>
          </li>
        ) : null}
        <li className="flex items-center">
          <button onClick={nextPage} className="outline-0 hover:text-cyan w-8">
            <img className="w-full h-auto" src={paginationArrow} alt="arrow" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
