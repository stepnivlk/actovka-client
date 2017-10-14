import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from './Login';
import login from '../../data/features/login/actions/login';
import { routes } from '../../constants'

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    const { dispatch } = this.props;

    dispatch(login({ email, password }));
  }

  handleEmailChange = (email) => this.setState(() => ({ email }))

  handlePasswordChange = (password) => this.setState(() => ({ password }))

  redirectAuthenticated = () => {
    const { from } = this.props.location.state || { from: { pathname: routes.DASHBOARD } };

    return (
      <Redirect to={from} />
    );
  }

  render() {
    const { email, password } = this.state;
    const { loginError, isAuthenticated } = this.props

    if (isAuthenticated) { return this.redirectAuthenticated(); };

    return (
      <Login
        password={password}
        email={email}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
        loginError={loginError}
      />
    )
  }
};

const mapStateToProps = (state) => ({
  loginError: state.currentUser.loginError,
  isAuthenticated: state.currentUser.isAuthenticated,
});

export default connect(mapStateToProps)(LoginContainer);
