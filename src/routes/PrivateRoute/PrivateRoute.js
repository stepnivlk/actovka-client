import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from 'js-cookie'

import { common } from '../../constants';
import { isAuthenticatedMapper } from '../../data/stateMappers';
import currentUser from '../../data/features/currentUser/actions/currentUser';

const authenticate = ({ isAuthenticated, dispatch }) => {
  if (isAuthenticated) { return true };

  const token = Cookie.get(common.COOKIE_NAME);
  if (token) {
    dispatch(currentUser())
    return true;
  }

  return false;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (
    authenticate(rest) ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
};

export default connect(isAuthenticatedMapper)(PrivateRoute);
