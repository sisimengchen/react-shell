/**
 * @file 用户权限校验路由组件
 * @author mengchen <sisimengchen@gmail.com>
 * @module components/Authorized/AuthorizedRoute
 */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Authorized from './Authorized';

class AuthorizedRoute extends Component {
  render() {
    const { component: Component, render, token, redirectPath, ...rest } = this.props;
    const authority = {
      token
    };
    const { location } = this.props;
    return (
      <Authorized
        authority={authority}
        noMatch={
          <Route
            {...rest}
            render={() => (
              <Redirect to={{ pathname: redirectPath, search: `?target=${encodeURIComponent(location.pathname)}` }} />
            )}
          />
        }
      >
        <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
      </Authorized>
    );
  }
}

const mapStateToProps = ({ common }) => ({
  token: common.token
});

export default connect(mapStateToProps)(AuthorizedRoute);
