import React from 'react';
import ReactDOM from 'react-dom/client';
import Rueckenuebungen from './components/rueckenuebungen/Rueckenuebungen';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#35363a'
    }
  },
});

root.render(
  <React.StrictMode>

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Rueckenuebungen />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
