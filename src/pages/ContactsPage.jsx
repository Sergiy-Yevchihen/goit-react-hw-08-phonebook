import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import { Contacts } from 'components/Contacts';

const ContactsPage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <main>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      {isLoggedIn && <Contacts />}
    </main>
  );
};

export default ContactsPage;
