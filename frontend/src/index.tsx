import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import {createTheme, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import '@fontsource/roboto/400.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container #root not found');
}

const theme = createTheme();

createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
