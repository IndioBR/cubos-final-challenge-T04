import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './templates/Home/Home';

import { Register1 } from './templates/pages/Register/Register1';
import { Register2 } from './templates/pages/Register/Register2';
import { Register3 } from './templates/pages/Register/Register3';
import { LoginPage } from './templates/pages/Login'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/client",
    element: <App />,
  },
  {
    path: "/charges",
    element: <App />,
  },
  {
    path: "/register-step-1",
    element: <Register1 />,
  },
  {
    path: "/register-step-2",
    element: <Register2 />,
  },
  {
    path: "/register-step-3",
    element: <Register3 />,
  },
]);

import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
