/**
 * @file 导航组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { CSSTransition } from 'react-transition-group';
import history from '@history';
import { Auth } from '@agent';

import './index.scss';

class Overlay extends Component {
  closeOverlay() {
    const { dispatch } = this.props;
    dispatch({ type: 'UI_OVERLAY', payload: false });
  }

  logout() {
    const { dispatch } = this.props;
    dispatch({ type: 'LOGOUT', payload: Auth.logout() });
  }

  render() {
    const { isOverlay, token } = this.props;
    return (
      <div className={`overlay${isOverlay ? ' active' : ''}`} id="nav-overlay">
        <div className="container">
          <header className="header">
            <a className="logo" href="/">
              <img alt="星巴克" src={require('../../assets/icons/logo.svg')} />
            </a>
            <button className="icon close" onClick={() => this.closeOverlay()}>
              Close
            </button>
          </header>
          <div className="body">
            <div className="container middle">
              <footer className="account">
                <a id="menu-login" className="sign-in" onClick={() => this.logout()}>
                  <img src={require('../../assets/icons/icon-account.svg')} />
                  <span>登出</span>
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Overlay.defaultProps = {
  isOverlay: false
};

const mapStateToProps = ({ ui, common }) => ({
  isOverlay: ui.isOverlay,
  token: common.token
});

export default connect(mapStateToProps)(Overlay);
