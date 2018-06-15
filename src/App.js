import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch,
} from 'react-router-dom';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './data/store';
import { routes } from './constants';
import PrivateRoute from './routes/PrivateRoute';

import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NotificationBar from './components/NotificationBar';

import Organisation from './routes/Organisation';
import Profile from './routes/Profile';
import Clients from './routes/Clients';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <div className='provider'>
              <Navbar />
              <Sidebar />
              <Layout>
                <Switch>
                  <Route path={routes.LOGIN} component={Login} />
                  <PrivateRoute exact path='/' component={Dashboard}/>
                  <PrivateRoute path={routes.DASHBOARD} component={Dashboard}/>
                  <PrivateRoute path={routes.ORGANISATION} component={Organisation}/>
                  <PrivateRoute path={routes.PROFILE} component={Profile}/>
                  <PrivateRoute path={routes.CLIENTS} component={Clients}/>
                </Switch>
              </Layout>
              <NotificationBar />
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
