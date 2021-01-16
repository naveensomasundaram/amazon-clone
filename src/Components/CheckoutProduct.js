import React from "react";
import "../Styles/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: props?.id,
      },
    });
  };
  // title: productDetails.title,
  // price: productDetails.price,
  // imageURL: productDetails.imageURL,
  // rating: productDetails.rating,

  return (
    <div className="CheckoutProduct">
      <img className="checkoutProduct__image" src={props?.imageURL} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props?.title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{props?.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props?.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {(!props.hideButton || props.hideButton != undefined) && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
