import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';
import Waiting from '@components/Waiting';
import { Auth } from '@agent';

import './Login.scss';

class LoginPage extends Component {
  login() {
    const { dispatch } = this.props;
    dispatch({ type: 'LOGIN', payload: Auth.login() });
  }

  logout() {
    const { dispatch } = this.props;
    dispatch({ type: 'LOGOUT', payload: Auth.logout() });
  }

  componentWillReceiveProps(nextProps) {
    const { token } = this.props;
    const { token: newtoken } = nextProps;
    if (newtoken && newtoken != token) {
      this.loginRedirect(nextProps);
    }
  }

  loginRedirect(props) {
    const { location, history } = props;
    const { search } = location;
    history.replace(decodeURIComponent(search.split('?')[1].split('target=')[1]));
  }

  render() {
    const { processing } = this.props;
    return (
      <Fragment>
        <Navigator title="登录或创建一个新帐户 🌟" isBackable={false} />
        <div id="main" className="login-main">
          <button onClick={() => this.login()}>{processing ? '登录中...' : '一键登录'}</button>
          <button onClick={() => this.logout()}>{processing ? '登出中...' : '一键登出'}</button>
          {processing ? <Waiting /> : null}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ auth, common }) => ({
  processing: auth.processing,
  token: common.token
});

export default connect(mapStateToProps)(LoginPage);
