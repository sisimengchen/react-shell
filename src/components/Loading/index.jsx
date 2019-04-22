/**
 * @file 加载组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

const Loading = ({ loadding = false }) => (
  <div id="components-loading">
    <div className={`loading${loadding ? ' active' : ''}`} />
  </div>
);

const mapStateToProps = ({ ui }) => ({
  loadding: ui.loadding
});

export default connect(mapStateToProps)(Loading);
