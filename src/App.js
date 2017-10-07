import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './data/store';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import Sidebar from './components/Sidebar';
import Layout from './components/Layout';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

import PrivateRoute from './routes/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <div>
              <AppBar
                title="actovka"
                iconElementRight={<FlatButton label="User" />}
              />
              <Sidebar />
              <Layout>
                <Route path='/login' component={Login} />
                <PrivateRoute path='/dashboard' component={Dashboard}/>
              </Layout>
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
