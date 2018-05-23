import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set } from '@actions/page';

class UserIndex extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(set({
      title: '用户信息页'
    }));
  }

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
