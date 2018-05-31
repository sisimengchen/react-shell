/**
 * @file 导航组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import history from '@history';

import './index.scss';

class Navigator extends PureComponent {
  render() {
    const { title, isBackable, isShowLogo } = this.props;
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
      </nav>
    );
  }
}

Navigator.defaultProps = {
  title: '',
  isBackable: true,
  isShowLogo: false
};

export default Navigator;
