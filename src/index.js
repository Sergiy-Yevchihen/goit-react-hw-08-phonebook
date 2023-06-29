// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App/App';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#313131',

      // light: '#0066ff',
      // dark: '#ef6c00',
    },

    secondary: {
      main: '#041d51',
    },

    accent: {
      main: '#00f7ff',
    },

    error: {
      main: '#d32f2f',
    },

    colors: {
      dark: '#041d51',
      grey: '#313131',
      white: 'white',
      accent: 'rgb(12, 229, 229)',
      aqua: '#00ffff',
      noActive: '#b3c4e6a3',
      shadow: '1px 2px 2px rgb(0 0 0 / 0.5)',
      shadowAccent: '2px 5px 2px rgb(0 0 0 / 0.5)',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
