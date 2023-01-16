import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
