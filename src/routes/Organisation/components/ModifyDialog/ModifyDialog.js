import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import dialogTypes from './dialogTypes';

const actions = (onSave, onClose) => ([
  <FlatButton
    label="Cancel"
    primary={true}
    onClick={onClose}
  />,
  <FlatButton
    label="Save"
    primary={true}
    keyboardFocused={true}
    onClick={onSave}
  />,
]);

const titles = {
  [dialogTypes.NAME]: 'Edit Name',
}

const content = {
  [dialogTypes.NAME]: (value, onValueChange) => (
    <TextField
      value={value}
      onChange={(e, newValue) => onValueChange(newValue)}
      fullWidth
    />
  ),
}

const extractPayloadFromValue = (type, value) => ({
  [dialogTypes.NAME]: value.name,
}[type])

const ModifyDialog = ({ isOpen, onClose, onSave, type, onValueChange, value }) => (
  <Dialog
    title={titles[type]}
    actions={actions(onSave, onClose)}
    modal={false}
    open={isOpen}
    onRequestClose={onClose}
  >
    {type && content[type](extractPayloadFromValue(type, value), onValueChange)}
  </Dialog>
);

export default ModifyDialog;
