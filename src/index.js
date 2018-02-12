import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routing from './Routing.js'
ReactDOM.render(
  <BrowserRouter><Routing /></BrowserRouter>,
  document.getElementById('root')
);
