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
  goback() {
    const { isGoBack } = this.props;
    if (isGoBack) {
      history.goBack();
    }
  }

  handleUserClick() {
    const { isLogin, dispatch } = this.props;
    if (isLogin) {
      dispatch(toggleNavigatorShow());
    } else {
      console.log('未登录去登录页');
    }
  }

  render() {
    const { isLogin, user, hideBack, header } = this.props;
    return (
      <Fragment>
        <header id="header">
          {hideBack ? <span className="g-back">&nbsp;</span> : <span onClick={e => this.goback(e)}>返回</span>}
          <h1 className="g-title">{header.title}</h1>
          <span className="g-user" onClick={e => this.handleUserClick(e)}>
            {isLogin ? user.name : '登录'}
          </span>
        </header>
        <Navigator />
      </Fragment>
    );
  }
}

Header.defaultProps = {
  isLogin: false,
  user: undefined,
  hideBack: false,
  isGoBack: true
};

const stateToProps = ({ userState, pageState }) => ({
  isLogin: userState.isLogin,
  user: userState.user,
  header: pageState.header
});

export default connect(stateToProps)(Header);
