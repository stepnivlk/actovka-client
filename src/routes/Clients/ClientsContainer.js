import React from 'react';

// Material UI
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const floatingButton = {
  margin: 0,
  top: 'auto',
  right: 30,
  bottom: 30,
  left: 'auto',
  position: 'fixed',
}

const ClientsContainer = () => (
  <div className='row align-items-center justify-content-md-center'>
    <div className='col col-md-2'></div>
    <div className='col col-md-8'>
      <Card>
        <CardHeader
          title="Clients"
        />
      </Card>
    </div>
    <FloatingActionButton style={floatingButton}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default ClientsContainer;
