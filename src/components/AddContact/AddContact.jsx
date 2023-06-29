import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';

import { Box, Paper, Stack, TextField } from '@mui/material';
import { SecondaryButton } from 'components/SecondaryButton';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const boxAdd = {
  position: 'absolute',
  top: 80,
  right: 0,
  p: 2,
  width: 400,
  zIndex: 1,
};

export const AddContact = ({ handleClick }) => {
  const [addContact] = useAddContactMutation();

  const { data: contacts = [] } = useGetContactsQuery();

  const handleSubmitForm = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    );

    try {
      duplicate
        ? toast.warn(`${name} is already in contacts.`, {
            theme: 'colored',
            autoClose: 2000,
          })
        : await addContact({ name, number });

      toast.success(`${name} contact has been added to the phonebook.`, {
        theme: 'colored',
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(`Error - ${error.message}`, {
        theme: 'colored',
        autoClose: 2000,
      });
    }

    form.reset();
  };

  return (
    <Box component={Paper} sx={boxAdd}>
      <Box component="form" onSubmit={handleSubmitForm}>
        <Stack direction="column" spacing={2}>
          <TextField
            autoFocus
            autoComplete="off"
            required
            name="name"
            type="text"
            label="Name"
            placeholder="John Wick"
            variant="outlined"
            color="accent"
          />
          <TextField
            autoComplete="off"
            required
            name="number"
            type="tel"
            label="Number"
            placeholder="+380123456789"
            variant="outlined"
            color="accent"
          />

          <Stack direction="row" justifyContent="center" spacing={5}>
            <SecondaryButton size={'sm'} type={'submit'}>
              Add
            </SecondaryButton>

            <SecondaryButton size={'sm'} fn={handleClick}>
              Exit
            </SecondaryButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
