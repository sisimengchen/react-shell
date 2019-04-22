import React, { Component, Fragment } from 'react';

export default class HomePage2 extends Component {
  constructor(props) {
    super(props);
    const { query } = props.location;
    this.state = {
      testid: query.testid
    };
  }

  render() {
    const { testid } = this.state;
    return <Fragment>我是测试2页{testid}</Fragment>;
  }
}
