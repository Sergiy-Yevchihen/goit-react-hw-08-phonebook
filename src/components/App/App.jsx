// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import { Layout } from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PubliсRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const ContactDetailsPage = lazy(() => import('../../pages/ContactDetailsPage'));
const InfoPage = lazy(() => import('../../pages/InfoPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="contacts/:id"
          element={
            <PrivateRoute>
              <ContactDetailsPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="info"
          element={
            <PrivateRoute>
              <InfoPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}