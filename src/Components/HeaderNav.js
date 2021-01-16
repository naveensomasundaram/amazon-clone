import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function HeaderNav(props) {
  const handleAuthentication = () => {
    if (props.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header__nav">
      <div className="header__option">
        <span className="header__optionLineOne">
          Hello, {props?.user?.email ? props.user.email : "Guest"}
        </span>
        <Link to={!props.user && "/login"}>
          <span
            className="header__optionLineTwo"
            onClick={handleAuthentication}
          >
            {props.user ? "Sign Out" : "Sign In"}
          </span>
        </Link>
      </div>
      <Link to="/orders">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {props?.basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default HeaderNav;
