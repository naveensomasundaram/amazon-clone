import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderNav from "./HeaderNav";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <HeaderNav basket={basket} user={user} />
    </div>
  );
}

export default Header;
