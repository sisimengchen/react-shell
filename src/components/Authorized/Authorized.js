import React, { Component } from 'react';

class Authorized extends Component {
  render() {
    const { children, authority, noMatch = null } = this.props;
    const childrenRender = typeof children === 'undefined' ? null : children;
    const { pending, logged } = authority;
    if (pending) {
      return <div>Loading...</div>;
    } else if (logged) {
      return childrenRender;
    } else {
      return noMatch;
    }
  }
}

export default Authorized;
