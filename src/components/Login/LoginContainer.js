import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import login from '../../data/features/login/actions/login';

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

  render() {
    const { email, password } = this.state;

    return (
      <Login
        password={password}
        email={email}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
};

export default connect(null)(LoginContainer);
