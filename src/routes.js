import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '@history';

import AuthorizedRoute from './components/Authorized/AuthorizedRoute';
import BasicLayout from '@layouts/BasicLayout';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        {/* 需要授权的页面通过AuthorizedRoute包装，未通过授权则直接取登录页 */}
        <AuthorizedRoute path="/" render={props => <BasicLayout {...props} />} redirectPath="/login" />
      </Switch>
    </Router>
  );
}
