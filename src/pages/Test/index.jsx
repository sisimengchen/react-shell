import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';

class TestPage extends Component {
  constructor(props) {
    super(props);
    const { query } = props.location;
    this.state = {
      testid: query.testid
    };
  }

  render() {
    const { testid } = this.state;
    return (
      <div className="pages-test">
        我是测试页{testid}
        <ul>
          <li>userId:{this.props.userId}</li>
          <li>userName:{this.props.userName}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({
  userId: currentUser.id,
  userName: currentUser.name
});

export default connect(mapStateToProps)(TestPage);
