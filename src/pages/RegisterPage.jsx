import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm';

const RegisterPage = () => {
  return (
    <main>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
