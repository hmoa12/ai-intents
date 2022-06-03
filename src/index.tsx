import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme'

import App from './App';
import './index.css';
declare module '@material-ui/core/styles/' {
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