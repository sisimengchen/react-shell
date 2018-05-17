import React from 'react';
import { connect } from 'react-redux';
import { request } from '@util';

class UserIndex extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const { match } = this.props;
    const { userId } = match.params;
    request('/wap/ajax/list', {
      method: 'GET'
    })
      .then((data) => {
        this.setState({
          data: data,
          userId: userId
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { state, props } = this;
    const { data, userId } = state;
    const { pending, logged, test } = props;
    return <div>user/{userId}</div>;
  }
}

const stateToProps = ({ userState }) => ({
  pending: userState.pending,
  logged: userState.logged
});

export default connect(stateToProps)(UserIndex);
