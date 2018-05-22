/**
 * @file 页头组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import history from '@history';

const Wrapper = styled.header `
  position: relative;
  display: flex;
  height: 52px;
  padding: 0 16px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  align-items: center;
`;

const Back = styled.span `
  flex: 1;
  text-align: left;
`;

const User = styled.span `
  flex: 1;
  text-align: right;
`;

const Title = styled.h1 `
  flex: 3;
  text-align: center;
`;

class Header extends Component {
  goback() {
    const { isGoBack } = this.props;
    if (isGoBack) {
      history.goBack();
    }
  }

  handleUserClick() {
    const { isLogin } = this.props;
    if (isLogin) {
      console.log('登录了显示菜单');
    } else {
      console.log('未登录去登录页');
    }
  }

  render() {
    const { isLogin, user, hideBack } = this.props;
    return (
      <Wrapper>
        {hideBack ? <Back>&nbsp;</Back> : <Back onClick={e => this.goback(e)}>返回</Back>}
        <Title>标题</Title>
        <User onClick={e => this.handleUserClick(e)}>{isLogin ? user.name : '登录'}</User>
      </Wrapper>
    );
  }
}

const stateToProps = ({ userState }) => ({
  isLogin: userState.isLogin,
  user: userState.user
});

export default connect(stateToProps)(Header);
