import React from 'react';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Col, Row } from 'react-flexbox-grid';

const PatientCard = () => (
  <Card style={{ marginTop: 10, marginBottom: 10 }}>
    <Flexbox alignItems="center" flexDirection="row">
      <Flexbox flexBasis={'10%'}>
        <Avatar
          size={60}
          style={{ marginLeft: 10 }}
        >
          A
        </Avatar>
      </Flexbox>
      <Flexbox flexBasis={'23%'}>
        <CardTitle title="Card title" subtitle="Card subtitle" />
      </Flexbox>
      <Flexbox flexBasis={'67%'}>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Flexbox>
    </Flexbox>
  </Card >
);

export default PatientCard;
