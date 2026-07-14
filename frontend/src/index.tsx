import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import '@fontsource/roboto/400.css';
import customTheme from "./theme";

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container #root not found');
}

createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
