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

class Navigator extends Component {
  closeOverlay() {
    const { dispatch } = this.props;
    dispatch({ type: 'UI_OVERLAY', payload: false });
  }

  logout() {
    const { dispatch } = this.props;
    dispatch({ type: 'LOGOUT', payload: Auth.logout() });
  }

  render() {
    const { title, isBackable, isShowLogo, isOverlay } = this.props;
    return (
      <nav id="navigator">
        <div className="container">
          <header className="header">
            <a className="logo" href="/">
              <img alt="星巴克" src={require('../../assets/icons/logo.svg')} />
            </a>
            <div className="primary">
              <ul />
            </div>
          </header>
          <div className="body">
            <nav className="secondary">
              {isBackable ? (
                <a
                  className="back"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <img src={require('../../assets/icons/icon-chevron-left.svg')} />
                </a>
              ) : (
                undefined
              )}
              {isShowLogo ? (
                <a className="logo" href="/">
                  <img alt="星巴克" src={require('../../assets/icons/logo.svg')} />
                </a>
              ) : (
                undefined
              )}
              <div className="display-1">
                <span>{title}</span>
              </div>
              <div className="tabs-wrapper">
                <ul className="subcategories" />
              </div>
            </nav>
          </div>
        </div>
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
      </nav>
    );
  }
}

Navigator.defaultProps = {
  title: '',
  isBackable: true,
  isShowLogo: false,
  isOverlay: false
};

const mapStateToProps = ({ ui }) => ({
  isOverlay: ui.isOverlay
});

export default connect(mapStateToProps)(Navigator);
