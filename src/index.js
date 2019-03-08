/* eslint-disable no-unused-vars */
// import '@babel/polyfill';
import './assets/styles/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from './app.jsx';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
