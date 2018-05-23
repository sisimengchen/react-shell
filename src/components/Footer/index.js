/**
 * @file 页脚组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';

const navItems = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '壳页',
    link: '/shell'
  }
];

class Footer extends Component {
  render() {
    const { footer } = this.props;
    return (
      <footer id="footer">
        <div className="g-links">
          {navItems.map((item, index) => (
            <a key={index} target={item.blankTarget ? '_blank' : '_self'} href={item.link}>
              {item.text}
            </a>
          ))}
        </div>
        <div className="g-copyright">Copyright © 2018 sisimengchen@gmail.com</div>
      </footer>
    );
  }
}

const stateToProps = ({ pageState }) => ({
  footer: pageState.footer
});

export default connect(stateToProps)(Footer);
