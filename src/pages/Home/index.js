import React, { Component, Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import Navigator from '@components/Navigator';
import Footer from '@components/Footer';
import Waiting from '@components/Waiting';
import ContentLoader, { Facebook } from 'react-content-loader';
import List from '@components/List';
import { request } from '@utils';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      list: []
    };
  }

  componentDidMount() {
    request('/api/home').then((data) => {
      this.setState({
        loading: false,
        list: data.list
      });
    });
  }

  render() {
    const { loading, list } = this.state;
    return (
      <Fragment>
        <DocumentTitle title="首页" />
        <Navigator title="首页" isBackable={false} />
        <List />
        <ul id="main">
          {loading ? (
            <Facebook />
          ) : (
            list.map((item, index) => (
              <li key={index}>
                {item.id}
                {item.name}
              </li>
            ))
          )}
        </ul>
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
