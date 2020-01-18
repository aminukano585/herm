import React from 'react';
import { Box } from 'herm';

function Main({ children }) {
  return (
    <Box paddingLeft="40px" paddingTop="40px">
      {children}
    </Box>
  );
}

export default Main;