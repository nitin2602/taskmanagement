import { Button, HStack, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const Nav = () => {
  return (
    <HStack p={7} m={7} justifyContent="space-between" alignItems="center">
      <Heading>Task Board</Heading>
      <Menu>
        <MenuButton >
        <CgProfile size={40} />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Sign out</MenuItem>
          
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Nav;
