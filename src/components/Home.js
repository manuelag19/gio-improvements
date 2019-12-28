import React from 'react';
// import { Link } from 'react-router-dom';
import { Segment, Header } from 'semantic-ui-react';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <Segment vertical>
        <Header as="h1">
          We fix houses
        </Header>
        <p>Want us to fix your home? </p>
        {/* <p>
          <Link to="/dynamic">Navigate to Dynamic Page</Link>
        </p> */}
      </Segment>
    </Layout>
  );
};

export default Home;