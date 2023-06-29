import { Helmet } from 'react-helmet';
import { ContactDetails } from 'components/ContactDetails';

const ContactDetailsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <ContactDetails />
    </main>
  );
};

export default ContactDetailsPage;
