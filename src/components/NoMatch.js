import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

import Layout from './Layout';

const NoMatch = () => {
  return (
    <Layout>
      <Icon name="minus cirucle" size="big" />
      <strong>Page not found</strong>
    </Layout>
  );
};

export default NoMatch;
