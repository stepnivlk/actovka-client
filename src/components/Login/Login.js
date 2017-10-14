import React from 'react';

// Material UI
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Login = ({ email, password, onEmailChange, onPasswordChange, onSubmit }) => (
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
            errorText=''
          />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            value={password}
            onChange={(e, newValue) => onPasswordChange(newValue)}
            errorText=''
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
