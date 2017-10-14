import React, { Component } from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';

import Layout from './components/Layout';
import Info from './components/Info';

const availableTabs = {
  INFO: 'info',
  TIMETABLE: 'timetable',
  ROOMS: 'rooms',
  STAFF: 'staff',
};

class OrganisationContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: availableTabs.INFO
    }
  }

  handleTabChange = (value) => this.setState(() => ({ selectedTab: value }));

  render() {
    return(
      <Layout>
        <Tabs
          value={this.state.selectedTab}
          onChange={this.handleTabChange}
        >
          <Tab label="info" value={availableTabs.INFO}>
            <Info />
          </Tab>
          <Tab label="rooms" value={availableTabs.ROOMS}>
            rooms
          </Tab>
          <Tab label="staff" value={availableTabs.STAFF}>
            staff
          </Tab>
        </Tabs>
      </Layout>
    )
  }
};

export default OrganisationContainer;
