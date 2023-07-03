import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUpdateContactMutation } from 'redux/contacts/contactsApi';

import { Box, Paper, Stack, TextField } from '@mui/material';
import { SecondaryButton } from 'components/SecondaryButton';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const boxDetails = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 2,
  width: 400,
};

const textFieldUpdate = {
  '& .MuiOutlinedInput-root:hover': {
    color: 'secondary.main',
  },
};

export const ContactDetails = () => {
  const {
    state: { from },
  } = useLocation();
  const { name, number, id } = from;

  const [updateContact] = useUpdateContactMutation();

  const navigate = useNavigate();
  const closePage = () => navigate('/contacts');

  const handleSubmitForm = async e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    const savedContact = { name, number };

    if (!name || !number) {
      toast.error(`Name or number not entered`, {
        theme: 'colored',
        autoClose: 2000,
      });
      return;
    }

    try {
      await updateContact({ savedContact, id });
      toast.success(`Contact ${name} updated.`, {
        theme: 'colored',
        autoClose: 2000,
      });

      closePage();
    } catch (error) {
      toast.error(`Error - ${error.message}`, {
        theme: 'colored',
        autoClose: 2000,
      });
    }
  };

  return (
    from && (
      <Box component={Paper} sx={boxDetails}>
        <Stack component="form" onSubmit={handleSubmitForm}>
          <Stack direction="column" spacing={2}>
            <TextField
              autoComplete="off"
              defaultValue={name}
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              color="accent"
              sx={textFieldUpdate}
            />
            <TextField
              autoComplete="off"
              defaultValue={number}
              name="number"
              type="tel"
              label="Number"
              variant="outlined"
              color="accent"
              sx={textFieldUpdate}
            />

            <Stack direction="row" justifyContent="center" spacing={5}>
              <SecondaryButton type={'submit'}>Save</SecondaryButton>

              <Link to="/contacts">
                <SecondaryButton>Exit</SecondaryButton>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    )
  );
};
