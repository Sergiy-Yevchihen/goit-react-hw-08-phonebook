import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectFilter } from 'redux/contacts/selectors';
import { filter } from 'redux/contacts/contactsSlice';

import { Box, Button, Input, InputAdornment, Stack } from '@mui/material';
import { AddContact } from 'components/AddContact';
import { BiSearchAlt } from 'react-icons/bi';
import { Title } from 'components/Title';

const btnAdd = {
  outline: 'none',
  fontSize: 16,
  px: 3,
  '&:hover': {
    backgroundColor: 'accent.main',
    border: '1px solid primary.main',
  },
};

export const Filter = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(filter(e.currentTarget.value));
  };

  const handleClick = () => {
    setShowAddContact(showAddContact => !showAddContact);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="baseline"
      marginTop={4}
    >
      <Box component="div" position="relative">
        <Button
          type="button"
          onClick={handleClick}
          variant="outlined"
          color="secondary"
          sx={btnAdd}
        >
          Add contact
        </Button>
        {showAddContact && <AddContact handleClick={handleClick} />}
      </Box>
      <Title>Phonebook</Title>
      <Box component="div">
        <Input
          placeholder="Find contact by name"
          type="text"
          name="name"
          onChange={handleChange}
          value={currentFilter}
          color="accent"
          startAdornment={
            <InputAdornment position="start" sx={{ color: 'secondary.main' }}>
             
              <BiSearchAlt />
            </InputAdornment>
          }
        />
      </Box>
    </Stack>
  );
};
