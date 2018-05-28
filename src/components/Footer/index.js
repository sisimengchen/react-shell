/**
 * @file 页脚组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import './index.scss';

const navItems = [
  {
    id: 'home',
    text: '首页',
    link: '/'
  },
  {
    id: 'shell',
    text: '壳页',
    link: '/shell'
  },
  {
    id: 'user',
    text: '我的账户',
    link: '/user/123'
  },
  {
    id: 'menu',
    text: '菜单',
    link: '/menu'
  },
  {
    id: 'more',
    text: '更多',
    link: '/more'
  }
];

class Footer extends Component {
  render() {
    let { footer, acitve } = this.props;
    return (
      <footer id="footer">
        <ul className="g-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className={acitve === item.id ? 'active' : undefined}
                target={item.blankTarget ? '_blank' : '_self'}
                to={item.link}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}

export default Footer;
