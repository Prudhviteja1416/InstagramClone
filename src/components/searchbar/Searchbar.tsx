import React from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  searchValue: string;
  onSearchValueChange: Function;
}
export default function Searchbar({ searchValue, onSearchValueChange }: Props) {
  return (
    <div className="searchbar-container">
      <input
        id="searchbar"
        onChange={(e) => {
          onSearchValueChange(e.target.value);
        }}
      />
      {searchValue === "" && (
        <div
          onClick={(e) => document.getElementById("searchbar")?.focus()}
          className="searchbar-placeholder"
        >
          <SearchIcon id="searchbar-placeholder-icon" />
          <span>Search..</span>
        </div>
      )}
    </div>
  );
}
