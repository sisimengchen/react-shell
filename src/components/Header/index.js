/**
 * @file 页头组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import history from '@history';
import Navigator from '@components/Navigator';

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
  cursor: pointer;
`;

const User = styled.span `
  flex: 1;
  text-align: right;
  cursor: pointer;
`;

const Title = styled.h1 `
  flex: 3;
  text-align: center;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isShowNavigator: false
    };
  }

  goback() {
    const { isGoBack } = this.props;
    if (isGoBack) {
      history.goBack();
    }
  }

  handleUserClick() {
    const { isLogin } = this.props;
    const { isShowNavigator } = this.state;
    if (isLogin) {
      // console.log(!isShowNavigator);
      this.setState({
        isShowNavigator: !isShowNavigator
      });
    } else {
      console.log('未登录去登录页');
    }
  }

  render() {
    const { isLogin, user, hideBack, title } = this.props;
    const { isShowNavigator } = this.state;
    return (
      <Fragment>
        <Wrapper>
          {hideBack ? <Back>&nbsp;</Back> : <Back onClick={e => this.goback(e)}>返回</Back>}
          <Title>{title}</Title>
          <User onClick={e => this.handleUserClick(e)}>{isLogin ? user.name : '登录'}</User>
        </Wrapper>
        <Navigator isShow={isShowNavigator} />
      </Fragment>
    );
  }
}

Header.defaultProps = {
  isLogin: false,
  user: undefined,
  hideBack: false,
  isGoBack: true
};

const stateToProps = ({ userState, pageState }) => ({
  isLogin: userState.isLogin,
  user: userState.user,
  title: pageState.title
});

export default connect(stateToProps)(Header);
