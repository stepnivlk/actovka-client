import React from 'react';

import { List, ListItem } from 'material-ui/List';
import CommuncationBusiness from 'material-ui/svg-icons/communication/business';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import { grey500, indigo500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';

import dialogTypes from '../../ModifyDialog/dialogTypes';

const editButton = (handleEditClick, type) => (
  <IconButton onClick={() => handleEditClick(type)}>
    <Settings color={grey500} />
  </IconButton>
);

const Basic = ({ name, handleEditClick }) => (
  <div className='row'>
    <div className='col col-md-6'>
      <List>
        <ListItem
          leftIcon={<CommuncationBusiness color={indigo500} />}
          rightIconButton={editButton(handleEditClick, dialogTypes.NAME)}
          primaryText={name}
          secondaryText="Name"
          disabled
        />
      </List>
    </div>
    <div className='col col-md-6'>
      <List>
      <ListItem
        leftIcon={<SvgIconFace />}
        rightIconButton={editButton(handleEditClick)}
        primaryText="Tomas Koutsky"
        secondaryText="Manager"
        disabled
      />
    </List>
    </div>
  </div>
);

export default Basic;
