import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '@pages/Home';
import AuthorizedRoute from './components/Authorized/AuthorizedRoute';
import BasicLayout from '@layouts/BasicLayout';
import Login from '@pages/User/Login';
import Exception404 from '@pages/Exception/404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <AuthorizedRoute path="/" render={props => <BasicLayout {...props} />} redirectPath="/login" />
        <Route component={Exception404} />
      </Switch>
    </BrowserRouter>
  );
}
