import React from 'react';
import { Container} from 'semantic-ui-react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Navbar />
      <Container style={{ minHeight: 700, padding: '1em 0em' }}>
        {children}
      </Container>
      <Footer />
    </Container>
  );
}

export default Layout;