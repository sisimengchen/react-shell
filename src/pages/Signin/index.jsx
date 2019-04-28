import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import history from 'core/history';
import { signin } from 'agent';
import Waiting from 'components/waiting';
import './index.scss';

class SigninPage extends PureComponent {
  constructor(props) {
    super(props);
    const { query } = props.location;
    this.state = {
      target: query.target || '/',
      loading: false,
      accountid: 'accountid',
      password: 'password'
    };
  }

  signin = () => {
    const { accountid, password } = this.state;
    this.setState({
      loading: true
    });
    signin({
      accountid,
      password
    })
      .then((data) => {
        this.props.signin(data);
        this.setState(
          {
            loading: false
          },
          () => {
            const { target } = this.state;
            history.replace(target.replace(window.location.origin, ''));
          }
        );
      })
      .catch((error) => {
        this.setState({
          loading: false
        });
      });
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="pages-signin">
        <button onClick={this.signin}>一键登录</button>
        {loading && <Waiting />}
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  ...data
});

const mapDispatchToProps = dispatch => ({
  signin: (payload = {}) => dispatch({ type: 'SIGNIN', payload: payload })
  // updateData: (payload = {}) => dispatch({ type: 'UPDATE_DATA', payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninPage);
