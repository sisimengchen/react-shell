/**
 * @file 启动画面组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React from 'react';
import './index.scss';

const Launch = ({ appInitComplete = false }) => (
  <div id="components-launch" className={!appInitComplete ? 'active' : null}>
    <div className="launch">
     <p>Launch...</p>
     <img src={require('./assets/react.svg')} />
    </div>
  </div>
);

export default Launch;
