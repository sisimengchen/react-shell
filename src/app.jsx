/* eslint-disable no-unused-vars */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import CoreRouter from 'core/Router';
import Loading from 'components/Loading';
import Launch from 'components/Launch';
/**
 * 应用程序Component.
 */
class App extends PureComponent {
  static defaultProps = {
    appInitComplete: false
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { appInitComplete } = this.props;
    return (
      <Fragment>
        <Loading />
        <Launch appInitComplete={appInitComplete} />
        {appInitComplete ? <CoreRouter /> : null}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ global }) => ({
  appInitComplete: global.appInitComplete
});

export default connect(mapStateToProps)(App);
