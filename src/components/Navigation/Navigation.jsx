import { NavLink } from 'react-router-dom';

import { Box, Button } from '@mui/material';

export const Navigation = () => {
  return (
    <Box component="div" sx={{ display: 'flex', gap: 4 }}>
      <NavLink to="/">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: 'colors.light',
            outline: 'none',
            fontSize: 16,
            px: 6,
            '&:hover': {
              backgroundColor: 'colors.grey',
              color: 'colors.aqua',
              border: '1px solid transparent',
            },
            '&.active': {
              backgroundColor: 'colors.grey',
              color: 'colors.aqua',
              border: '1px solid transparent',
            },
          }}
        >
          Home
        </Button>
      </NavLink>

      <NavLink to="/contacts">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: 'colors.light',
            outline: 'none',
            fontSize: 16,
            px: 3,
            '&:hover': {
              backgroundColor: 'colors.grey',
              color: 'colors.aqua',
              border: '1px solid transparent',
            },
            '&.active': {
              backgroundColor: 'colors.grey',
              color: 'colors.aqua',
              border: '1px solid transparent',
            },
          }}
        >
          Contacts
        </Button>
      </NavLink>

      {/* <NavLink to="/info">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: 'colors.dark',
            outline: 'none',
            fontSize: 16,
            px: 3,
            '&:hover': {
              backgroundColor: 'colors.grey',
              color: 'colors.aqua',
              border: '1px solid transparent',
            },
            '&.active': {
              backgroundColor: 'colors.grey',
              color: 'colors.aqua',
              border: '1px solid transparent',
            },
          }}
        >
          Info
        </Button>
      </NavLink> */}
    </Box>
  );
};
