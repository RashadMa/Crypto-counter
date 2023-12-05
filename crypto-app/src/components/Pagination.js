import React, { useContext, useRef } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";
import submitIcon from "../assets/submit-icon.svg";

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = inputRef.current.value;
    if (value !== 0) {
      setPerPage(value);
      inputRef.current.value = value;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center font-nunito mr-12"
    >
      <label
        htmlFor="perpage"
        className="relative flex justify-center items-center mr-2 font-bold"
      >
        Per Page:
      </label>
      <input
        ref={inputRef}
        type="number"
        name="perpage"
        min={1}
        max={250}
        placeholder="10"
        className="w-16 rounded bg-gray-200 placeholder::text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
      />
      <button className="ml-1 cursor-pointer" type="submit">
        <img src={submitIcon} alt="submit" className="w-full h-auto" />
      </button>
    </form>
  );
};

const Pagination = () => {
  let { page, setPage, totalPages, perPage, data } = useContext(CryptoContext);
  const AllPage = Math.ceil(totalPages / perPage);

  const nextPage = () => {
    if (page === AllPage) {
      return null;
    } else {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page === AllPage) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  if (data && data.length >= perPage) {
    return (
      <div className="flex items-center">
        <PerPage />
        <ul className="flex items-center justify-end text-sm">
          <li className="flex items-center">
            <button
              onClick={prevPage}
              className="outline-0 hover:text-cyan w-8"
            >
              <img
                className="w-full h-auto rotate-180"
                src={paginationArrow}
                alt="arrow"
              />
            </button>
          </li>
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
            <button
              onClick={nextPage}
              className="outline-0 hover:text-cyan w-8"
            >
              <img
                className="w-full h-auto"
                src={paginationArrow}
                alt="arrow"
              />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
