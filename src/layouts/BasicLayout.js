/**
 * @file 基础布局组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Stores from '@pages/Stores';
import Account from '@pages/Account';
import Menu from '@pages/Menu';
import Shell from '@pages/Shell';
import UserIndex from '@pages/User';
import Exception404 from '@pages/Exception/404';

class BasicLayout extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/shell" component={Shell} />
          <Route path="/user/:userId" component={UserIndex} />
          <Route component={Exception404} />
        </Switch>
      </Fragment>
    );
  }
}

export default BasicLayout;
