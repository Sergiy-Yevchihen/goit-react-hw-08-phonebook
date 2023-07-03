import { Typography } from '@mui/material';

export const Title = ({ children }) => {
  return (
    <Typography
      variant="h6"
      component="p"
      sx={{
        textTransform: 'uppercase',
        fontSize: 32,
        fontWeight: 600,
        textAlign: 'center',
        color: 'secondary.main',
        marginTop: 3,
      }}
    >
      {children}
    </Typography>
  );
};
