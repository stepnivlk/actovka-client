import React from 'react';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { grey500, indigo500 } from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommuncationBusiness from 'material-ui/svg-icons/communication/business';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';

import Basic from './components/Basic'

const iconButtonElement = (
  <IconButton>
    <MoreVertIcon color={grey500} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const styles = {
  chip: {
    margin: 4,
  },
}

const Info = ({ organisation, handleEditClick }) => (
  <Card>
    <CardText>
      <Basic
        name={organisation.name}
        handleEditClick={handleEditClick}
      />
      <hr />
      Contacts
      <div className='row'>
        <div className='col col-md-6'>
          <List>
            <ListItem
              leftIcon={<ActionHome color={indigo500} />}
              rightIconButton={rightIconMenu}
              primaryText="Vážská 998/2, 196 00 Praha-Cakovice"
              secondaryText="Primary"
              disabled
            />
            <ListItem
              leftIcon={<ActionHome color={indigo500} />}
              rightIconButton={rightIconMenu}
              primaryText="Prerov nad Labem 23"
              secondaryText=""
              disabled
            />
          </List>
        </div>
        <div className='col col-md-6'>
          <List>
            <ListItem
              leftIcon={<CommunicationCall color={indigo500} />}
              rightIconButton={rightIconMenu}
              primaryText="+420 797 995 995"
              secondaryText="Mobile"
              disabled
            />
            <ListItem
              insetChildren={true}
              leftIcon={<CommunicationEmail color={indigo500} />}
              rightIconButton={rightIconMenu}
              primaryText="eva@zslivingston.cz"
              secondaryText="Email"
            />
          </List>
        </div>
      </div>
      <hr />
      Billing Info
      <div className='row'>
        <div className='col col-md-6'>
          <List>
            <ListItem
              leftIcon={<CommunicationCall color={indigo500} />}
              rightIconButton={rightIconMenu}
              primaryText="03012557"
              secondaryText="IC"
              disabled
            />
            <ListItem
              insetChildren={true}
              leftIcon={<CommunicationEmail color={indigo500} />}
              rightIconButton={rightIconMenu}
              primaryText="691007039"
              secondaryText="DIC"
              disabled
            />
          </List>
        </div>
        <div className='col col-md-6'>
          <List>
            <ListItem
              insetChildren={true}
              leftIcon={<CommunicationEmail color={indigo500} />}
              rightIconButton={rightIconMenu}
              primaryText="43digvv"
              secondaryText="DS"
              disabled
            />
          </List>
        </div>
      </div>
    </CardText>
  </Card>
);

export default Info
