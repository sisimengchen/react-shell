import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '@components/Header';
import Footer from '@components/Footer';

class UserIndex extends Component {
  render() {
    const { match, userInfo } = this.props;
    const { userId } = match.params;
    return (
      <Fragment>
        <Header title="我的主页" />
        <div>
          <p>当前路由的用户id:{userId}</p>
          <p>当前登录的用户id:{userInfo.id}</p>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const stateToProps = ({ userState }) => ({
  userInfo: userState.userInfo
});

export default connect(stateToProps)(UserIndex);
