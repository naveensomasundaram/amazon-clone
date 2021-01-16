import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{}, dispatch] = useStateValue();
  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch({
          type: "SET_USER",
          item: {
            user: "asdjaisdj",
          },
        });
        if (auth) history.push("/");
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG9.png"
          className="login__logo"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In </h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to <strong> AMAZON FAKE CLONE's </strong>
          Conditions of Use and Privacy Notice.
        </p>
        <button
          className="login__registerButton"
          type="submit"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
