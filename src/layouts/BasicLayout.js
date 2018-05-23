/**
 * @file 基础布局
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Home from '@pages/Home';
import Login from '@pages/User/Login';
import Shell from '@pages/Shell';
import UserIndex from '@pages/User';
import Exception404 from '@pages/Exception/404';

class BasicLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/shell" component={Shell} />
          <Route path="/user/:userId" component={UserIndex} />
          <Route component={Exception404} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default BasicLayout;
