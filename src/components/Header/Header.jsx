import { useAuth } from 'hooks';

import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      sx={{
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: '#07bc0c',
      }}
    >
      <Toolbar
        sx={{
          flex: 1,
          justifyContent: 'space-around',
        }}
      >
        <Navigation />

        <Typography
          variant="h6"
          component="p"
          sx={{
            textTransform: 'uppercase',
            fontSize: 28,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          Contacts
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
