import React from "react";
import "../Styles/Checkout.css";
import Subtotal from "../Components/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt="amazon ad"
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg"
        />
        <div>
          <h3> Hi, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
