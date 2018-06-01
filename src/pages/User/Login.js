import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';
import Waiting from '@components/Waiting';
import { Auth } from '@agent';

class LoginPage extends Component {
  login() {
    const { dispatch } = this.props;
    dispatch({ type: 'LOGIN', payload: Auth.login() });
  }

  logout() {
    const { dispatch } = this.props;
    dispatch({ type: 'LOGOUT', payload: Auth.logout() });
  }

  render() {
    const { processing } = this.props;
    return (
      <Fragment>
        <Navigator title="登录" />
        <div id="main">
          <button onClick={() => this.login()}>{processing ? '登录中...' : '登录'}</button>
          <button onClick={() => this.logout()}>{processing ? '登出中...' : '登出'}</button>
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
