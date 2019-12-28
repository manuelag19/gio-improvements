import React from 'react';
import {
  Container,
  Icon,
  Segment,
  Image,
  Grid,
  List,
  Divider
} from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '3em 0em' }}>
      <Container textAlign='center'>
        <Grid columns={2} divided inverted stackable>
          <Grid.Row>
            <Grid.Column>
              <Image src="public/logo.png" size="medium" centered />
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>160-07 76th Avenue</List.Item>
                <List.Item>Flushing, NY 11366</List.Item>
                <List.Item>(347) 232 - 4195</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted section />
        <List.Item>copyright <Icon name="copyright outline" /> 2019 Manu all rights reserved</List.Item>
      </Container>
    </Segment>
  );
};

export default Footer;
