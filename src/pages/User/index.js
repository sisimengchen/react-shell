import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';

class UserIndex extends Component {
  render() {
    const { match, currentUser } = this.props;
    const { userId } = match.params;
    return (
      <Fragment>
        <Navigator title="我的主页" />
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

export default connect(mapStateToProps)(UserIndex);
