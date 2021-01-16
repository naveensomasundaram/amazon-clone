import React from "react";
import "../Styles/Home.css";
import Product from "./Product";
import { useStateValue } from "../StateProvider";

function Home() {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (productDetails) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: productDetails.id,
        title: productDetails.title,
        price: productDetails.price,
        imageURL: productDetails.imageURL,
        rating: productDetails.rating,
      },
    });
  };

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="Amazon BG Image"
        />
        <div className="home__row">
          <Product
            id={"12344253"}
            title={"iPhone 12"}
            price={"126900.00 "}
            imageURL={
              "https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SX466_.jpg"
            }
            rating={3}
            addToBasket={addToBasket}
          />
          <Product
            id={"88646782"}
            title={"Dell Alienware m15"}
            price={"291054.00"}
            imageURL={
              "https://images-na.ssl-images-amazon.com/images/I/51naOJTemHL._SL1280_.jpg"
            }
            rating={5}
            addToBasket={addToBasket}
          />
        </div>
        <div className="home__row">
          <Product
            id={"09876533"}
            title={"Echo Studio (Black) "}
            price={"26646.00"}
            imageURL={
              "https://images-na.ssl-images-amazon.com/images/I/61Bq3LQhDSL._SL1000_.jpg"
            }
            rating={4}
            addToBasket={addToBasket}
          />
          <Product
            id={"98542378"}
            title={`Samsung LC34J791WTWXXL 34" Wide ScreenThunderbolt 3 Curved Monitor 3440 x 1440`}
            price={"80399.00"}
            imageURL={
              "https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._SL1500_.jpg"
            }
            rating={4}
            addToBasket={addToBasket}
          />
          <Product
            id={"92318726"}
            title={
              "Fossil Gen 5 Carlyle Stainless Steel Touchscreen Men's Smartwatch with Speaker, Heart Rate, GPS and Smartphone Notifications - FTW4024"
            }
            price={"22995.00"}
            imageURL={
              "https://images-na.ssl-images-amazon.com/images/I/71XWG48C-NL._UL1500_.jpg"
            }
            rating={5}
            addToBasket={addToBasket}
          />
        </div>
        <div className="home__row">
          <Product
            id={"91236244"}
            title={
              "Amazon Brand - Solimo Musca Single Seater Fabric Recliner (Chocolate)"
            }
            price={"16999.00"}
            imageURL={
              "https://images-na.ssl-images-amazon.com/images/I/71ftZH%2BDJML._SL1500_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
