import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (
    rest.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute);
