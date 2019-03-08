import React, { Component, Fragment } from 'react';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const { query } = props.location;
    this.state = {
      testid: query.testid
    };
  }

  render() {
    const { testid } = this.state;
    return <Fragment>我是测试页{testid}</Fragment>;
  }
}
