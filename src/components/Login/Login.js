import React from 'react';

import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Login = () => (
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
          />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          />
        </CardText>
        <CardActions>
          <FlatButton label="Login" />
        </CardActions>
      </Card>
    </div>
  </div>
);

export default Login;
