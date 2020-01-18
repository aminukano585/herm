import React from 'react';
import { Box, Flex, LogoIcon, User } from 'herm';

function Header() {
  return (
    <Box backgroundColor="#fafafb" paddingLeft="50px" paddingRight="50px">
      <Flex alignItems="center" justifyContent="space-between" height="50px">
        <LogoIcon></LogoIcon>
        <User
          username="Aminu Kano"
          sub="Scheduled for 18th January at 04:31 AM"
        >
          <Flex alignItems="center">
            <Box>
              <User.Avatar></User.Avatar>
            </Box>
            <Box marginLeft="12px">
              <User.Username></User.Username>
            </Box>
          </Flex>
        </User>
      </Flex>
    </Box>
  );
}

export default Header;