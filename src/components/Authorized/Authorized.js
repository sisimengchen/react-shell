/**
 * @file 用户权限校验渲染组件
 * @author mengchen <sisimengchen@gmail.com>
 * @module components/Authorized/Authorized
 */
import React, { Component } from 'react';

class Authorized extends Component {
  render() {
    const { children, authority, noMatch = null } = this.props;
    const childrenRender = typeof children === 'undefined' ? null : children;
    const { isFetched, isLogin } = authority;
    if (isFetched) {
      // 用户信息请求状态
      return <div>加载中...</div>;
    } else if (isLogin) {
      // 授权成功过状态
      return childrenRender;
    } else {
      // 授权失败状态
      return noMatch;
    }
  }
}

export default Authorized;
