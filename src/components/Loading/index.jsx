/**
 * @file 加载组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React from 'react';
import './index.scss';

const Loading = ({ active = false }) => (
  <div id="components-loading">
    <div className={`loading${active ? ' active' : ''}`} />
  </div>
);

export default Loading;
