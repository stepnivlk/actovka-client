import React, { Component } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import CommunicationCall from 'material-ui/svg-icons/communication/call';

const floatingButton = {
  margin: 0,
  top: 'auto',
  right: 30,
  bottom: 30,
  left: 'auto',
  position: 'fixed',
};

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  };

  handleTouchTap = (e) => {
    e.preventDefault();

    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className='row align-items-center justify-content-md-center'>
        <div className='col col-md-12'>
          {this.props.children}
        </div>
        <FloatingActionButton style={floatingButton} onClick={this.handleTouchTap}>
          <ContentAdd />
        </FloatingActionButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem leftIcon={<ActionHome />} primaryText="Address" />
            <MenuItem leftIcon={<CommunicationEmail />} primaryText="Phone" />
            <MenuItem leftIcon={<CommunicationCall />} primaryText="Email" />
          </Menu>
        </Popover>
      </div>
    )
  };
};

export default Layout;
