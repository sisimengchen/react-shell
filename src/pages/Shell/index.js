import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '@actions/shell';

class ShellPage extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <div id="main">
        <p>示例</p>
        <p>当前counter：{counter}</p>
        <button onClick={() => dispatch(increment(1))}>increment</button>
        <button onClick={() => dispatch(decrement(1))}>decrement</button>
      </div>
    );
  }
}

const mapStateToProps = ({ shellState }) => ({
  counter: shellState.counter
});

export default connect(mapStateToProps)(ShellPage);
