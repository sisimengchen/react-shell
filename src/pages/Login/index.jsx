import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Waiting from 'components/waiting';
import { login, register } from 'agent';

const mapStateToProps = ({ global }) => ({
  global: global
});

@connect(mapStateToProps)
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountid: '',
      password: ''
    };
  }

  login = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'LOGIN', payload: login() });
  };

  register = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'REGISTER', payload: register() });
  };

  logout = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'LOGOUT', payload: logout() });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.login}>一键登录</button>
        <Waiting />
      </Fragment>
    );
  }
}
