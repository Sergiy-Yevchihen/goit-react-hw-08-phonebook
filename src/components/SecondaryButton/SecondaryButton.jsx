import { Button } from '@mui/material';

const btnSecondary = {
  outline: 'none',
  fontSize: 16,
  px: 3,
  '&:hover': {
    backgroundColor: 'accent.main',
    border: '1px solid primary.main',
  },
};

export const SecondaryButton = ({ children, type, size, fn }) => {
  return (
    <Button
      onClick={fn ? fn : null}
      type={type === 'submit' ? 'submit' : 'button'}
      size={size === 'lg' ? 'lg' : 'sm'}
      variant="outlined"
      color="primary"
      sx={btnSecondary}
    >
      {children}
    </Button>
  );
};

const btnThird = {
  outline: 'none',
  fontSize: 16,
  px: 3,
  '&:hover': {
    backgroundColor: 'accent.main',
    border: '1px solid primary.main',
  },
};

export const ThirdButton = ({ children }) => {
  return (
    <Button variant="outlined" size="sm" color="primary" sx={btnThird}>
      {children}
    </Button>
  );
};
