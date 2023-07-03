import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';

import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  

  const handleLogOut = async () => {
    const response = await dispatch(logOut());

    if (response.type === 'auth/logout/fulfilled') {
      navigate('/');
    }
  };

  return (
    <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography
        variant="h4"
        component="p"
        sx={{
          fontSize: 18,
          fontWeight: 600,
          textAlign: 'center',
          color: 'colors.dark',
        }}
      >
        You are logged in as "{user.name}"
        
      </Typography>
      <Button
        type="button"
        onClick={handleLogOut}
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
        Logout
      </Button>
    </Box>
  );
};
