import React from 'react';
import { render } from 'react-snapshot'
import App from './App';
import "./css/main.scss"
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "popper.js/dist/popper";
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';


render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
