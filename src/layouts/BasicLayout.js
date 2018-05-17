import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserIndex from '@pages/User';
import UserList from '@pages/User/List';

class BasicLayout extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/user" component={UserList} />
        <Route path="/user/:userId" component={UserIndex} />
      </Switch>
    );
  }
}

export default BasicLayout;
