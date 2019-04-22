import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pages-home">
        <dl>
          <dd>
            <NavLink to="/sign/test">测试页</NavLink>
            <NavLink to="/sign/test2">测试页2</NavLink>
          </dd>
        </dl>
        <div>HomePage</div>
      </div>
    );
  }
}
