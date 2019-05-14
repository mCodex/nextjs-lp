import React from 'react';
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

const Nav = () => (
  <Menu inverted>
    <Menu.Item
      as={Link}
      prefetch
      href="/"
      name="home"
      // active={activeItem === 'home'}
      // onClick={this.handleItemClick}
    />
    {/* <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} /> */}
    {/* <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} /> */}
  </Menu>
);

export default Nav;
