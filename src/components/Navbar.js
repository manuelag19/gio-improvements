import React from 'react';
import {
  Menu,
  Segment,
  List,
  Image
} from 'semantic-ui-react';
import styled from "styled-components";

const StyledMenuItem = styled(Menu.Item)`
  &:hover {
      color: #ed5d0d !important;
  }
`;

const sections = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'];

class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      active: sections[0],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e, { name }) {
    this.setState({ active: name });
  }

  render() {
    const { active } = this.state;
    return (
      <Menu borderless pointing fixed="top" inverted >
          <Menu.Item as="a" header style={{ padding: '0', margin: '0' }}>
            <Image size='medium' src='public/logo.png' />
          </Menu.Item>
          <Menu.Menu position="right" >
            <Menu pointing secondary color="orange">
              {sections.map((section) => (
                  <StyledMenuItem
                    key={section}
                    name={section}
                    active={active === section}
                    onClick={this.handleClick}
                  />
              ))}
            </Menu>
          </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;