import react, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Styles/App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe(
  "pk_test_51I5ShfEbbiIGklamIZr28uYDZ1oBsQkQOn5ZZCJeS1BKjhBa4zeFcxmntRtH6gGz1F0r3qKIIMXAJSNcJIM78xYq00sAifvaue"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          item: {
            user: authUser,
          },
        });
      } else {
        dispatch({
          type: "SET_USER",
          item: {
            user: null,
          },
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
