import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';
import { increment, decrement } from '@actions/shell';
import { HashRouter, Switch, Route } from 'react-router-dom';

class StoresPage extends Component {
  render() {
    const { counter, dispatch, match } = this.props;

    return (
      <Fragment>
        <Navigator title="门店" />
        <div id="main">
          <p>示例</p>
          <p>当前counter：{counter}</p>
          <button onClick={() => dispatch(increment(1))}>increment</button>
          <button onClick={() => dispatch(decrement(1))}>decrement</button>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ shell }) => ({
  counter: shell.counter
});

export default connect(mapStateToProps)(StoresPage);
