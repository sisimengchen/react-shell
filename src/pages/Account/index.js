import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Footer from '@components/Footer';
import Navigator from '@components/Navigator';

class AccountPage extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Fragment>
        <Navigator title={`您好！${currentUser && currentUser.name}`} />
        <div>
          <p>当前登录的用户id:{currentUser.id}</p>
        </div>
        <Footer acitve="account" />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ common }) => ({
  currentUser: common.currentUser
});

export default connect(mapStateToProps)(AccountPage);
