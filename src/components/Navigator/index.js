/**
 * @file 导航组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.nav `
  position: absolute;
  left: 0px;
  right: 0px;
  padding: 0 16px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
`;

const Item = styled.p `
  display: flex;
  background: #fff;
  height: 52px;
  align-items: center;
  border-top: 1px solid #ebebeb;
`;

const navItems = [
  { text: '首页', link: '/' },
  { text: '壳页', link: '/shell' },
  { text: '我的主页', link: '/user/123' }
];

class Navigator extends Component {
  renderItems() {
    return navItems.map((item, index) => (
      <Link to={item.link} key={index}>
        <Item>{item.text}</Item>
      </Link>
    ));
  }

  render() {
    const { isShow, isLogin, user } = this.props;
    // console.log(isShow);
    const style = {
      display: isShow ? 'block' : 'none'
    };
    return (
      <Wrapper style={style}>
        {this.renderItems()}
        {isLogin ? <Item>退出账号</Item> : ''}
      </Wrapper>
    );
  }
}

const stateToProps = ({ userState }) => ({
  isLogin: userState.isLogin,
  user: userState.user
});

export default connect(stateToProps)(Navigator);
