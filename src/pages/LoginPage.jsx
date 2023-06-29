import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm';

const LoginPage = () => {
  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
