/**
 * @file 导航组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { setNavigatorShow } from '@actions/page';

import './index.scss';

const navItems = [
  { text: '首页', link: '/' },
  { text: '壳页', link: '/shell' },
  { text: '我的主页', link: '/user/123' }
];

const renderItems = () => navItems.map((item, index) => (
    <Link key={index} to={item.link}>
      <div className="warpper">{item.text}</div>
    </Link>
));

class Navigator extends Component {
  handleClick() {
    const { dispatch } = this.props;
    dispatch(setNavigatorShow(false));
  }

  render() {
    const { isLogin, navigator } = this.props;
    return (
      <CSSTransition in={navigator.isShow} timeout={300} classNames="fade">
        <nav
          id="navigator"
          className={navigator.isShow ? 'fade-enter-done' : 'fade-exit-done'}
          onClick={e => this.handleClick(e)}
        >
          {renderItems()}
          {isLogin ? (
            <a>
              <div className="warpper">退出账号</div>
            </a>
          ) : (
            ''
          )}
        </nav>
      </CSSTransition>
    );
  }
}

const stateToProps = ({ userState, pageState }) => ({
  isLogin: userState.isLogin,
  user: userState.user,
  navigator: pageState.navigator
});

export default connect(stateToProps)(Navigator);
