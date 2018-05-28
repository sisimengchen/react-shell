/**
 * @file 加载组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React, { Component } from 'react';

import './index.scss';

class Loading extends Component {
  constructor(props) {
    super(props);
    const { active } = this.props;
    this.state = {
      active
    };
  }

  componentWillReceiveProps(nextProps) {
    const { active } = nextProps;
    this.setState({ active });
  }

  render() {
    const { active } = this.state;
    return (
      <div id="app-loading">
        <div className={`loading${active ? ' active' : ''}`} />
      </div>
    );
  }
}

Loading.defaultProps = {
  active: false
};

export default Loading;
