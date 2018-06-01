/**
 * @file 页脚组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import store from '@store';

import './index.scss';

// 页底公共导航配置
const navItems = [
  {
    id: 'home',
    text: '首页',
    link: '/',
    icon: require('../../assets/icons/icon-home.svg'),
    icon_active: require('../../assets/icons/icon-home-active.svg'),
    exact: true
  },
  {
    id: 'stores',
    text: '门店',
    link: '/stores',
    icon: require('../../assets/icons/icon-stores.svg'),
    icon_active: require('../../assets/icons/icon-stores-active.svg')
  },
  {
    id: 'account',
    text: '我的账户',
    link: '/account',
    icon: require('../../assets/icons/icon-account.svg'),
    icon_active: require('../../assets/icons/icon-account-active.svg')
  },
  {
    id: 'menu',
    text: '菜单',
    link: '/menu',
    icon: require('../../assets/icons/icon-menu.svg'),
    icon_active: require('../../assets/icons/icon-menu-active.svg')
  },
  {
    id: 'more',
    text: '更多',
    link: () => store.dispatch({ type: 'UI_OVERLAY', payload: true }),
    icon: require('../../assets/icons/icon-more.svg'),
    icon_active: require('../../assets/icons/icon-more-active.svg')
  }
];

export default () => (
  <footer id="footer">
    <ul className="g-links">
      {navItems.map((item, index) => (
        <li key={item.id}>
          {typeof item.link === 'function' ? (
            <a href="javascript:void(0)" onClick={() => item.link()}>
              <span className="icons">
                <img src={item.icon} />
                <img src={item.icon_active} className="active" />
              </span>
              <div className="text">{item.text}</div>
            </a>
          ) : (
            <NavLink activeClassName="active" exact={item.exact} to={item.link}>
              <span className="icons">
                <img src={item.icon} />
                <img src={item.icon_active} className="active" />
              </span>
              <div className="text">{item.text}</div>
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  </footer>
);
