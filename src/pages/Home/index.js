import React, { Component, Fragment } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default () => (
  <Fragment>
    <Header title="首页" isBackable={false} />
    <div id="main">
      <p>首页</p>
    </div>
    <Footer />
  </Fragment>
);
