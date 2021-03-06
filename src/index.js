import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./Router"
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Router></Router>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
