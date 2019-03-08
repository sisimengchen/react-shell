/* eslint-disable no-unused-vars */
/**
 * @file 用户权限校验路由组件
 * @author mengchen <sisimengchen@gmail.com>
 * @module components/Authorized/AuthorizedRoute
 */
import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import queryString from 'query-string';

const AuthorizedRoute = ({
  layout: Layout = Fragment,
  component: Component,
  authority = [],
  title,
  currentUser,
  location = {},
  ...rest
}) => {
  currentUser.authority = currentUser.authority || [];
  location.query = location.search ? queryString.parse(location.search) : {};
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authority.length === 0 || currentUser.authority.indexOf(authority[0]) > -1) {
          return (
            <Layout>
              {title && <DocumentTitle title={title} />}
              <Component {...props} />
            </Layout>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                search: `?target=${encodeURIComponent(location.href)}`
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = ({ currentUser }) => ({
  currentUser: currentUser
});

export default connect(mapStateToProps)(AuthorizedRoute);
