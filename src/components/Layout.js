import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Container style={{ minHeight: 700, padding: '1em 0em' }}>
        {children}
      </Container>
      <Footer />
    </Container>
  );
}

export default Layout;