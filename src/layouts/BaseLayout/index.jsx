import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './index.scss';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="layouts-baselayout">
        <Header title={this.props.title} />
        <div className="layouts-container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
