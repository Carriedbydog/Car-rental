import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

const ReactProBar = () => {
  return (
    <>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<NavLink to="/" />}> Home</MenuItem>
          <MenuItem component={<NavLink to="/catalog" />}> Catalog</MenuItem>
          <MenuItem component={<NavLink to="/favorites" />}>Favorites</MenuItem>
        </Menu>
      </Sidebar>
      ;
    </>
  );
};

export default ReactProBar;
