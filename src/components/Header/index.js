/**
 * @file 页头组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import history from '@history';
import Navigator from '@components/Navigator';
import { toggleNavigatorShow } from '@actions/page';

import './index.scss';

class Header extends Component {
  handleUserClick() {
    const { isLogin, dispatch } = this.props;
    if (isLogin) {
      dispatch(toggleNavigatorShow());
    } else {
      console.log('未登录去登录页');
    }
  }

  render() {
    const { title, isBackable, isLogin, userInfo } = this.props;
    return (
      <Fragment>
        <header id="header">
          {isBackable ? (
            <span
              className="g-back"
              onClick={() => {
                history.goBack();
              }}
            >
              返回
            </span>
          ) : (
            <span className="g-back">&nbsp;</span>
          )}
          <h1 className="g-title">{title}</h1>
          <span className="g-user" onClick={e => this.handleUserClick(e)}>
            {isLogin ? userInfo.name : '登录'}
          </span>
        </header>
        <Navigator />
      </Fragment>
    );
  }
}

Header.defaultProps = {
  title: '',
  isBackable: true
};

const stateToProps = ({ userState }) => ({
  userInfo: userState.userInfo,
  isLogin: userState.isLogin
});

export default connect(stateToProps)(Header);
