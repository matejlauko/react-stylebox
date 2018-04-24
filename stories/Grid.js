import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Row, Col } from '../src';

storiesOf('Grid/Simple', module).add('without style', () => (
  <Grid>
    <Row>
      <Col>Col</Col>
      <Col>Col</Col>
    </Row>
  </Grid>
));
