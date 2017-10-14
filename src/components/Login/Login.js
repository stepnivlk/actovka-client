import React from 'react';

// Material UI
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const loginErrorMessage = 'Invalid Login';

const errorText = (loginError) => {
  if (!loginError) { return null };

  return loginErrorMessage;
}

const Login = ({
  email, password, onEmailChange, onPasswordChange, onSubmit, loginError
}) => (
  <div className='row align-items-center justify-content-md-center'>
    <div className='col col-md-4'></div>
    <div className='col col-md-4'>
      <Card>
        <CardHeader
          title="Please Log in"
        />
        <CardText>
          <TextField
            hintText="Email Field"
            floatingLabelText="Email"
            value={email}
            onChange={(e, newValue) => onEmailChange(newValue)}
            errorText={errorText(loginError)}
          />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            value={password}
            onChange={(e, newValue) => onPasswordChange(newValue)}
            errorText={errorText(loginError)}
          />
        </CardText>
        <CardActions>
          <FlatButton
          label="Login"
          onClick={() => onSubmit()}
          />
        </CardActions>
      </Card>
    </div>
  </div>
);

export default Login;
