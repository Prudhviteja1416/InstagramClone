import React, { useState } from "react";
import Button from "../buttons/Button";
import Content from "../content/Content";
import Searchbar from "../searchbar/Searchbar";
import "./landing.css";
export default function Landing() {
  const [searchValue, setSearchValue] = useState("");
  function onSearchValueChange(newValue: string) {
    setSearchValue(newValue);
    console.log("Im changing", newValue);
  }
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo-section">Instagram</div>
          <div className="searchbar-seaction">
            <Searchbar
              searchValue={searchValue}
              onSearchValueChange={onSearchValueChange}
            />
          </div>
          <div className="action-section">
            <Button />
          </div>
        </div>
      </div>
      <div className="content-container">
        <Content />
      </div>
    </div>
  );
}
