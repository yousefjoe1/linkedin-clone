import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./searchhistory.css";

const Searchhistory = (props) => {
  const searchva = useSelector((state) => state.search);

  return (
    <div
      className={`search-history-container ${
        props.searchdrop && "history-anime"
      }`}
    >
      <p>search history </p>
      <div className="search-result">
        {searchva &&
          searchva.map((ser) => (
            <Link key={ser} to={"/dachboard"}>
              {ser}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Searchhistory;
