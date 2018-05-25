import React, { Component, Fragment } from 'react';
import Exception from '@components/Exception';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default () => (
  <Fragment>
    <Header title="404" />
    <Exception type="404" style={{ minHeight: 500, height: '80%' }} />
    <Footer />
  </Fragment>
);
