import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import history from 'core/history';
import { signout } from 'agent';
import './index.scss';

class TestPage extends PureComponent {
  constructor(props) {
    super(props);
    const { query } = props.location;
    this.state = {
      testid: query.testid
    };
  }

  signout = () => {
    signout().then(() => {
      this.props.signout();
      const { pathname, search } = this.props.location;
      const target = `target=${encodeURIComponent(`${pathname}${search}`)}`;
      history.replace({
        pathname: '/signin',
        search: target ? `?${target}` : ''
      });
    });
  };

  render() {
    const { testid } = this.state;
    return (
      <div className="pages-test">
        我是测试页{testid}
        <ul>
          <li>userId:{this.props.userId}</li>
          <li>userName:{this.props.userName}</li>
        </ul>
        <button onClick={this.signout}>注销</button>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({
  userId: currentUser.id,
  userName: currentUser.name
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch({ type: 'SIGNOUT' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestPage);
