import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { unstable_createMuiStrictModeTheme as createMuiTheme, ThemeProvider, } from '@material-ui/core/styles';

import App from './App';
import './index.css';
declare module '@material-ui/core/styles/createMuiTheme' {
  interface IPaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }
  interface ITypography {
    fontFamily?: string[];
    subtitle1?: object;
    h5?: object;
    subtitle2?: object;
  }
  interface Theme {
    PaletteColor: IPaletteColor,
    Typography: ITypography
  }
}

/* todo - I have used Material UI theme over here which is static and in future I can make it dynamic may be 
fetching the CSS config from backend, implementing different themes like a Dark theme */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#034D9F',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    subtitle1: {
      color: '#495057'
    },
    h5: {
      fontWeight: 500,
      color: '#212529'
    },
    subtitle2: {
      fontStyle: 'italic'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();