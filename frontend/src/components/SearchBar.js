import React from "react";
import style from "../styles/searchBar.module.css";
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = ({ setKeyword }) => {
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <div className={style.SearchBarContainer}>
      <div className="container">
        <div className={style.SearchBarWrapper}>
          <input
            placeholder="بحث عن الكتب"
            onChange={(e) => handleSearch(e)}
            className={style.searchBar}
            type="text"
          />
          <span className={style.searchIcon}>
            <RxMagnifyingGlass size={38} color="#147bfc" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
