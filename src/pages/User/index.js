import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserIndex extends Component {
  render() {
    const { match, user } = this.props;
    const { userId } = match.params;
    return (
      <div>
        <p>当前路由的用户id:{userId}</p>
        <p>当前登录的用户id:{user.id}</p>
      </div>
    );
  }
}

const stateToProps = ({ userState }) => ({
  user: userState.user
});

export default connect(stateToProps)(UserIndex);
