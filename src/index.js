/* eslint-disable no-unused-vars */
// import '@babel/polyfill';
import './assets/styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { User } from 'utils/user';
import App from './app.jsx';

store.dispatch({ type: 'APP_LOAD', payload: User.get() });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
