import React from 'react';

// Material UI
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

const OrganisationContainer = () => (
  <div className='row align-items-center justify-content-md-center'>
    <div className='col col-md-2'></div>
    <div className='col col-md-8'>
      <Card>
        <CardHeader
          title="Organisation"
        />
      </Card>
    </div>
  </div>
);

export default OrganisationContainer;
