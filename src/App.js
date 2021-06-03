// import logo from './logo.svg';
import "./App.css";
import { Login } from "./Components/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import { AppBar } from "@material-ui/core";

import React, { useState, useEffect } from "react";
import { Tickets } from "./Components/ticets/tickets";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loginAC } from "./store/actions/actionlogin";
import { useHistory } from "react-router-dom";
import { UsersTable } from "./Components/Table/Table";
import { UserComponent } from "./Components/Table/components/UserComponent/UserComponent";
import { Cinema } from "./Components/cinema/Cinema";

function App() {
  let history = useHistory() || [];
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  let [googleProfile, setGoogleUser] = useState();

  const style = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 30,
    padding: "0 30px",
    textDecoration: "none",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };

  const toolbatStyle = {
    dislplay: "flex",
    justifyContent: "space-between",
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isAuth")) === null) {
      localStorage.setItem("isAuth", JSON.stringify(false));
    }
    const _onInit = (auth2) => {
      console.log("init OK", auth2);
    };
    const _onError = (err) => {
      console.log("error", err);
    };
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(_onInit, _onError);
    });
  }, []);

  const signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log("Full Name: " + profile.getName());
      console.log("Email: " + profile.getEmail());
      dispatch(loginAC(true));
      setGoogleUser(profile);
      history.push("/tickets");
    });
  };

  const signOut = () => {
    dispatch(loginAC(false));
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
    });
    history.push("./login");
  };

  return (
    <Router>
      <div className="header">
        <React.Fragment>
          <AppBar position="fixed">
            <Toolbar style={toolbatStyle}>
              <Link className="link" to="/tickets">
                <Button
                  style={style}
                  color="primary"
                  type="button"
                  variant="contained"
                >
                  tickets
                </Button>
              </Link>

              <Link className="link" to="/userstable">
                <Button
                  style={style}
                  color="primary"
                  type="button"
                  variant="contained"
                >
                  table
                </Button>
              </Link>

              <Link className="link" to="/cinema">
                <Button style={style} color="" type="button" variant="">
                  cinema
                </Button>
              </Link>

              <Link className="link" to="/login">
                {store.isAuth ? (
                  <Button style={style} onClick={signOut}>
                    Log out
                  </Button>
                ) : (
                  <Button style={style}>
                    <Link className="link" to="/login">
                      Log in
                    </Link>
                  </Button>
                )}
              </Link>
            </Toolbar>
          </AppBar>
          <div className={""} />
        </React.Fragment>
      </div>
      <div className="logo"></div>

      <div className="wrapper">
        <Switch>
          <Route path="/login">
            {store.isAuth ? (
              <Redirect to="/tickets"></Redirect>
            ) : (
              <Login signIn={signIn} signOut={signOut} />
            )}
          </Route>

          <Route path="/table/:id">
            <UserComponent />
          </Route>

          {/* <Route path="" exact>
            <UserWelcome profile={googleProfile} />
          </Route> */}

          <Route path="/cinema" exact>
            <Cinema />
          </Route>

          <Route path="/tickets">
            {store.isAuth ? <Tickets /> : <Redirect to="/login"></Redirect>}
          </Route>

          <Route path="/userstable">
            <UsersTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
