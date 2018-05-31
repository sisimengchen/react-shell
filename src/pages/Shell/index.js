import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';
import { increment, decrement } from '@actions/shell';

class ShellPage extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <Fragment>
        <Navigator title="壳页" />
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

export default connect(mapStateToProps)(ShellPage);
