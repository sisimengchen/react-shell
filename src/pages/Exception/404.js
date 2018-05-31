import React, { Component, Fragment } from 'react';
import Exception from '@components/Exception';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';

export default () => (
  <Fragment>
    <Navigator title="404" />
    <Exception type="404" style={{ minHeight: 500, height: '80%' }} />
    <Footer />
  </Fragment>
);
