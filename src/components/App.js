import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import history from '@history';

import ContentLoader, { Facebook } from 'react-content-loader';
import AuthorizedRoute from '@components/Authorized/AuthorizedRoute';
import BasicLayout from '@layouts/BasicLayout';
import { Auth } from '@agent';
import Loading from '@components/Loading';
import Home from '@pages/Home';
import Login from '@pages/User/Login';

class App extends Component {
  constructor(props) {
    super();
    const { token, dispatch } = props;
    // 请求一下用户数据，校验权限
    dispatch({ type: 'APP_LOAD', payload: Auth.current() });
  }

  render() {
    const { appLoaded, active } = this.props;
    if (appLoaded) { // app启动完成渲染路由
      return (
        <Fragment>
          <Loading active={active} />
          <Router history={history}>
            <Switch>
              {/* 需要授权的页面通过AuthorizedRoute包装，未通过授权则直接取登录页 */}
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Login} />
              <AuthorizedRoute path="/" render={props => <BasicLayout {...props} />} redirectPath="/login" />
            </Switch>
          </Router>
        </Fragment>
      );
    } else { // app启动中渲染加载动画
      return (
        <Fragment>
          <Loading active={true} />
          <Facebook />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = ({ common, ui }) => ({
  appLoaded: common.appLoaded,
  currentUser: common.currentUser,
  active: ui.busy
});

export default connect(mapStateToProps)(App);
