{
    "name": "amazon-clone",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@babel/plugin-transform-optional-chaining": "^7.23.4",
      "@emotion/react": "^11.11.3",
      "@emotion/styled": "^11.11.0",
      "@firebase/auth": "^1.5.1",
      "@floating-ui/react-dom": "^2.0.6",
      "@mui/icons-material": "^5.15.4",
      "@mui/material": "^5.15.5",
      "@rollup/plugin-terser": "^0.4.4",
      "@testing-library/jest-dom": "^5.17.0",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "firebase": "^7.19.1",
      "firebase-admin": "^12.0.0",
      "nth-check": "^2.0.1",
      "postcss": "^8.4.31",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.21.3",
      "react-scripts": "^5.0.1",
      "source-map": "^0.7.4",
      "svgo": "^3.2.0",
      "web-vitals": "^2.1.4",
      "webpack": "^5.90.0"
    },
    "scripts": {
      "start": "set PORT=5000 && react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "devDependencies": {
      "webpack-dev-server": "^4.15.1"
    }
  }
  


import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
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