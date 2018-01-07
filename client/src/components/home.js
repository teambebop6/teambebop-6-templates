import React from 'react';
import { Container } from 'semantic-ui-react';
import ListItems from '../containers/list_items';
import ListItemPreview from '../containers/list_item_preview';

const Home = () => (
  <Container>
    <ListItems/>
    <ListItemPreview/>
  </Container>
);

export default Home;
