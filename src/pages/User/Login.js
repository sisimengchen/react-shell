import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';
import Waiting from '@components/Waiting';
import { Auth } from '@agent';

import './Login.scss';

const navItems = [
  {
    id: 'login',
    text: '登录',
    link: '/login',
    exact: true
  },
  {
    id: 'register',
    text: '注册',
    link: '/register',
    exact: true
  }
];

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountid: '',
      password: '',
      isOk: false,
      token: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.token && props.token) {
      const { location, history } = props;
      const { search } = location;
      history.replace(decodeURIComponent(search.split('?')[1].split('target=')[1]));
      return null;
    } else {
      const { accountid, password } = state;
      return { isOk: !!(accountid && password && password.length >= 6) };
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

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
    const { accountid, password, isOk } = this.state;
    return (
      <Fragment>
        <Navigator title="登录或创建一个新帐户 🌟" isBackable={false} navItems={navItems} />
        <div className="login-form">
          <div className="form-field">
            <input type="hidden" value="version" />
            <div className="field floating">
              <div className="ok">
                <input
                  type="text"
                  id="accountid"
                  name="accountid"
                  placeholder="用户名或者电子邮箱"
                  value={accountid}
                  autoComplete="new-password"
                  onChange={this.handleChange}
                />
                <label>用户名或者电子邮箱</label>
              </div>
            </div>
            <div className="password-group-field">
              <div className="field floating">
                <div className="ok">
                  <input
                    type="password"
                    name="password"
                    placeholder="密码"
                    value={password}
                    autoComplete="new-password"
                    onChange={this.handleChange}
                  />
                  <label>密码</label>
                </div>
              </div>
              <div className="toggle-password hide" />
            </div>
          </div>
          <button onClick={() => this.login()} disabled={!isOk}>
            {processing ? '登录中...' : '一键登录'}
          </button>
          {/* <button onClick={() => this.logout()}>{processing ? '登出中...' : '一键登出'}</button> */}
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
