import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { User } from 'utils/user';
import Loading from 'components/Loading';
import CoreRouter from 'core/Router';
import CoreBoot from 'core/Boot';

const mapStateToProps = ({ global, currentUser }) => ({
  global: global,
  currentUser: currentUser
});

@connect(mapStateToProps)
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'APP_LOAD', payload: User.get() });
  }

  render() {
    const { global } = this.props;
    return (
      <Fragment>
        <Loading active={global.loadding} />
        <CoreRouter />
        {/* <CoreBoot /> */}
      </Fragment>
    );
  }
}
