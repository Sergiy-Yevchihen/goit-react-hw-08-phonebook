import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box component="div" sx={{ display: 'flex', gap: 4 }}>
      <NavLink to="/register">
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
          Register
        </Button>
      </NavLink>

      <NavLink to="/login">
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
          Login
        </Button>
      </NavLink>
    </Box>
  );
};
