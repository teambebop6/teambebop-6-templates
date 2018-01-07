import React from 'react';
import { Header } from 'semantic-ui-react';
import logo from '../../res/images/logo.png';

const TBHeader = () => (
  <div style={{ marginTop: 20 }} className="header">
    <div className="logo">
      <img src={logo} alt="react logo"/>
    </div>
    <Header as="h1">Team Bebop 6</Header>
  </div>
);

export default TBHeader;
