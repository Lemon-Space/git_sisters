import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext } from 'react';
import UserAuth from './Auth/UserAuth';
import PersonAuth from './Auth/PersonAuth';
import { NavBar } from './Components/Admin/AdminHeader';

export const Context = createContext(null)

ReactDOM.render(
  
  
  <Context.Provider value={{
    user: new UserAuth(),
    person: new PersonAuth()
  }}>

    <App />

  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
