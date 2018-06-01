import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';
const navItems = [
  {
    id: 'menu',
    text: '季度精选',
    link: '/menu',
    exact: true
  },
  {
    id: 'beverages',
    text: '饮料',
    link: '/menu/beverages',
    exact: true
  },
  {
    id: 'food',
    text: '美食',
    link: '/menu/food',
    exact: true
  }
];
class MenuIndex extends Component {
  render() {
    const { match, currentUser } = this.props;
    const { userId } = match.params;
    return (
      <Fragment>
        <Navigator title="菜单" navItems={navItems} />
        <div>
          <p>当前路由的用户id:{userId}</p>
          <p>当前登录的用户id:{currentUser.id}</p>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ common }) => ({
  currentUser: common.currentUser
});

export default connect(mapStateToProps)(MenuIndex);
