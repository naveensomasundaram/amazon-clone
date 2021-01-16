import React from "react";
import "../Styles/Product.css";

function Product(props) {
  const { id, title, price, imageURL, rating } = props;

  const addToBasket = () => {
    props.addToBasket(props);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={imageURL} alt="Product Image" />
      <button onClick={addToBasket}>Add to Button</button>
    </div>
  );
}

export default Product;
