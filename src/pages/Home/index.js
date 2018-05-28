import React, { Component, Fragment } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Loading from '@components/Loading';
import ContentLoader, { Facebook } from 'react-content-loader';
import { request } from '@utils';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      list: []
    };
  }

  componentDidMount() {
    request('/api/home').then((data) => {
      this.setState({
        isFetching: false,
        list: data.list
      });
    });
  }

  render() {
    const { isFetching, list } = this.state;
    return (
      <Fragment>
        <Loading active={isFetching} />
        <Header title="首页" isBackable={false} />
        <ul id="main">
          {isFetching ? (
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
        <Footer acitve="home" />
      </Fragment>
    );
  }
}

export default HomePage;
