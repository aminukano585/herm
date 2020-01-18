import React from 'react';
import { Text } from 'herm';

import Layout from '../components/Layout';

// import styled-reset
import { Reset } from 'styled-reset';

function Index() {
  return (
    <React.Fragment>
      <Reset />
      <Layout>
        <Text fontSize="32px">Hello, Herm! from aminukano</Text>
      </Layout>
    </React.Fragment>
  );
}

export default Index;