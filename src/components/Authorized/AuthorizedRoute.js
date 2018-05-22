/**
 * @file 用户权限校验路由组件
 * @author mengchen <sisimengchen@gmail.com>
 * @module components/Authorized/AuthorizedRoute
 */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Authorized from './Authorized';
import { fetchUser } from '@actions/user';

class AuthorizedRoute extends Component {
  constructor(props) {
    super();
    const { dispatch } = props;
    // 请求一下用户数据，校验权限
    dispatch(fetchUser());
  }

  render() {
    const { component: Component, render, isFetched, isLogin, user, redirectPath, ...rest } = this.props;
    const authority = {
      isFetched: isFetched,
      isLogin: isLogin,
      user: user
    };
    return (
      <Authorized
        authority={authority}
        noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
      >
        <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
      </Authorized>
    );
  }
}

const stateToProps = ({ userState }) => ({
  isFetched: userState.isFetched,
  isLogin: userState.isLogin,
  user: userState.user
});

export default connect(stateToProps)(AuthorizedRoute);
