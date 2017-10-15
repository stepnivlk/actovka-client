import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tabs, Tab } from 'material-ui/Tabs';

import { myOrganisation, updateMyOrganisation } from '../../data/features/organisation/actions';
import Layout from './components/Layout';
import Info from './components/Info';
import ModifyDialog from './components/ModifyDialog';

import dialogTypes from './components/ModifyDialog/dialogTypes';

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
      selectedTab: availableTabs.INFO,
      dialogOpen: false,
      dialogType: null,
      dialogValue: {},
    }
  }

  componentDidMount() {
    const { organisation, dispatch } = this.props;
    if (organisation.isLoaded) { return };

    dispatch(myOrganisation())
  }

  dialogTypeToValue = (type) => {
    const { organisation } = this.props;

    return {
      [dialogTypes.NAME]: { [dialogTypes.NAME]: organisation.name }
    }[type]
  }

  handleTabChange = (value) => this.setState(() => ({ selectedTab: value }));

  handleDialogOpen = (type) => this.setState(() => ({
    dialogOpen: true, dialogType: type, dialogValue: this.dialogTypeToValue(type)
  }));

  handleDialogClose = () => this.setState(() => ({ dialogOpen: false, dialogValue: {} }));

  handleDialogChange = (newValue) => this.setState(() => ({ dialogValue: newValue }));

  handleDialogSave = () => {
    const { dispatch } = this.props;
    const { dialogValue } = this.state;
    dispatch(updateMyOrganisation({ name: dialogValue }));
    this.handleDialogClose()
  }

  render() {
    const { INFO, TIMETABLE, ROOMS, STAFF } = availableTabs;
    const { organisation } = this.props;
    const { dialogOpen, dialogType, dialogValue } = this.state;

    return(
      <Layout>
        <Tabs
          value={this.state.selectedTab}
          onChange={this.handleTabChange}
        >
          <Tab label="info" value={INFO}>
            <Info organisation={organisation} handleEditClick={this.handleDialogOpen} />
          </Tab>
          <Tab label="rooms" value={ROOMS}>
            rooms
          </Tab>
          <Tab label="staff" value={STAFF}>
            staff
          </Tab>
        </Tabs>
        <ModifyDialog
          isOpen={dialogOpen}
          onClose={this.handleDialogClose}
          onSave={this.handleDialogSave}
          type={dialogType}
          value={dialogValue}
          onValueChange={this.handleDialogChange}
        />
      </Layout>
    )
  }
};

const mapStateToProps = ({ organisation }) => ({ organisation });

export default connect(mapStateToProps)(OrganisationContainer);
