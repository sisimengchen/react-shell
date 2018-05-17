import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Authorized from './Authorized';
import store from '@store';

class AuthorizedRoute extends React.Component {
  componentWillMount() {
    console.log('componentWillMount');
    setTimeout(() => {
      store.dispatch({
        type: 'SET_LOGGED_USER',
        logged: true
      });
    }, 500);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    const { component: Component, render, pending, logged, redirectPath, ...rest } = this.props;
    const authority = {
      pending: pending,
      logged: logged
    };
    return (
      <Authorized
        authority={authority}
        noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
      >
        <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
      </Authorized>
    );
  }
}

const stateToProps = ({ userState }) => ({
  pending: userState.pending,
  logged: userState.logged
});

export default connect(stateToProps)(AuthorizedRoute);
