import { useGetContactsQuery } from 'redux/contacts/contactsApi';

import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
import { Loader } from 'components/Loader';
import { Title } from 'components/Title';

export const Contacts = () => {
  const { data: contacts = [], isError, isLoading } = useGetContactsQuery();
  return (
    <>
      {!isError && <Filter />}
      {!contacts.length && !isError && <Title>No contacts</Title>}

      {contacts.length > 0 && !isError && <ContactsList />}

      {isLoading && !isError && <Loader />}
    </>
  );
};
