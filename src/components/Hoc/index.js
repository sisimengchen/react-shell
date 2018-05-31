import React, { Component } from 'react';

export const propsProxyHoc = WrappedComponent => class PPHoc extends Component {
  render() {
    const props = {
      ...this.props,
      message: 'You are under control'
    };
    return <WrappedComponent {...props} />;
  }
};

export const refHoc = WrappedComponent => class RefHoc extends Component {
  componentDidMount() {
    console.log(this.instanceComponent, 'instanceComponent');
  }

  render() {
    return (
        <WrappedComponent {...this.props} ref={instanceComponent => (this.instanceComponent = instanceComponent)} />
    );
  }
};

export const loadingHoc = checkFunction => WrappedComponent => class LoadHoc extends Component {
  render() {
    if (checkFunction(this.props)) {
      return (
          <div>
            <span>加载中</span>
            <WrappedComponent {...this.props} />
          </div>
      );
    } else {
      return <WrappedComponent {...this.props} />;
    }
  }
};
