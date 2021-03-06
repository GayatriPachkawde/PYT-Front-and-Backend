import React, { useState, useEffect } from "react";
import HomePage from "./HomePage/HomePage";
import Login from "./Authentication/Login";
import Welcome from "./WelcomePage/Welcome";
import Hyderabad from "./cities/Hyderabad";
import Goa from "./cities/Goa";
import Vizag from "./cities/Vizag";
import Kerala from "./cities/Kerala";
import BookingForm from "./BookingForm/BookingForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [showLogin, setshowLogin] = useState(false);
  const [city, setCity] = useState("");

  const signupHandler = (e, username, useremail, password) => {
    e.preventDefault();
    fetch("http://localhost:8000/signup", {
      method: "POST",
      body: JSON.stringify({ username, email: useremail, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        setLoggedIn(true);
        return { success: true };
      } else {
        return r.json();
      }
    });
  };
  const loginHandler = (e, useremail, password) => {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({ email: useremail, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        setLoggedIn(true);
        return { success: true };
      } else {
        return r.json();
      }
    });
  };

  const logoutHandler = () => {
    return fetch("http://localhost:9999/logout", {
      credentials: "include",
    }).then((r) => {
      if (r.ok) {
        setLoggedIn(false);
        setUserName(undefined);
        setUserEmail(undefined);
      }
    });
  };

  const updatedState = () => {
    setshowLogin(true);
  };

  const updateCity = (clickedcity) => {
    ((clickedcity) => setCity(clickedcity))(clickedcity);
    console.log(city);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <HomePage />
            ) : showLogin ? (
              <Login
                loginHandler={loginHandler}
                signupHandler={signupHandler}
              />
            ) : (
              <Welcome handler={updatedState} />
            )}
          </Route>
          <Route path="/Hyderabad">
            <Hyderabad handler={updateCity} />
          </Route>
          <Route path="/Goa">
            <Goa handler={updateCity} />
          </Route>
          <Route path="/Kerala">
            <Kerala handler={updateCity} />
          </Route>
          <Route path="/Vizag">
            <Vizag handler={updateCity} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
