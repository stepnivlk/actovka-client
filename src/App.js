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

import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
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
              <Navbar />
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
