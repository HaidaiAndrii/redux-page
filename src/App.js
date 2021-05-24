// import logo from './logo.svg';
import './App.css';
import { Login } from './Components/login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import { Tickets } from './Components/ticets/tickets';



function App() {

  useEffect(() => {
    const _onInit = auth2 => {
      console.log('init OK', auth2)
    }
    const _onError = err => {
      console.log('error', err)
    }
    window.gapi.load('auth2', function() {
      window.gapi.auth2
        .init({ // не забудьте указать ваш ключ в .env
          client_id:
            process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(_onInit, _onError)
    })
  }, []);

  const signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signIn().then(googleUser => {
    
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile()
      console.log('Full Name: ' + profile.getName())
      console.log('Email: ' + profile.getEmail())
    })
  }
  const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signOut().then(function() {
      console.log('User signed out.')
    })
  }

  return (
    <Router>
      <div className="header">
      <Link className="link" to="/home">
        Home
      </Link>
      

        <Link className="link" to="/login">
          Login
        </Link>)


        </div>
        <div className="logo">
    </div>

<div className="wrapper">

    <Switch>
      <Route path="/login">
            <Login signIn={signIn} signOut={signOut} />
      </Route>
      <Route path="/tickets">
            <Tickets />
      </Route>
      
    </Switch>
</div>
  </Router>

  );
}

export default App;
