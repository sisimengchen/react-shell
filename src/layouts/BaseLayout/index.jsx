import React, { Component } from 'react';
import './index.scss';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div id="layouts-baselayout">
        <h1>BaseLayout</h1>
        <div>{children}</div>
      </div>
    );
  }
}
