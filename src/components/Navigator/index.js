/**
 * @file 导航组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '@history';
import Overlay from './overlay';

import './index.scss';

class Navigator extends Component {
  render() {
    const { title, isBackable, isShowLogo, navItems } = this.props;
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
              {navItems &&
                navItems.length > 0 && (
                  <div className="tabs-wrapper">
                    <ul className="subcategories">
                      {navItems.map((item, index) => (
                        <li key={item.id}>
                          <NavLink activeClassName="active" exact={item.exact} to={item.link}>
                            <span>{item.text}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
              )}
            </nav>
          </div>
        </div>
        <Overlay />
      </nav>
    );
  }
}

Navigator.defaultProps = {
  title: '',
  isBackable: true,
  isShowLogo: false,
  navItems: []
};

export default Navigator;
