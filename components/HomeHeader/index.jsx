import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import './index.css';

import bgImg from '../../static/bg.png';

export default function() {
  return (
    <Grid
      className="homeHeaderContainer"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(0,0,0,0.8), rgba(0,0,0,0.6)),url(${bgImg})`
      }}
    >
      <Grid.Row>
        <Grid.Column textAlign="center" verticalAlign="middle">
          <Header as="h1" style={{ color: '#fff' }}>
            We just want to make the world better
          </Header>
          <Header as="h2" style={{ color: '#fff' }}>
            Be with us &nbsp;
            <span role="img" aria-label="Peace">
              ✌️
            </span>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
