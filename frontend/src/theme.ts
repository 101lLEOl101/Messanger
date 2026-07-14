import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      50:  '#fdecec', 100: '#f9c9cc', 200: '#f0989d', 300: '#e56870',
      400: '#d8434d', 500: '#c31f2b', 600: '#a81823', 700: '#8a121b',
      800: '#6b0d14', 900: '#4a0a0f',
      main: '#c31f2b',
      light: '#d8434d',
      dark: '#8a121b',
      contrastText: '#ffffff',
    },
    secondary: {
      50:  '#f6e9ea', 100: '#e3bcbf', 200: '#c98d92', 300: '#a95f66',
      400: '#8a3b43', 500: '#5a171c', 600: '#4d1318', 700: '#3d0e13',
      800: '#2d0a0d', 900: '#1c0608',
      main: '#5a171c',
      light: '#8a3b43',
      dark: '#3d0e13',
      contrastText: '#f6e9ea',
    },
    error:   { main: '#c31f2b', contrastText: '#ffffff' },
    warning: { main: '#d98324', contrastText: '#1c0608' },
    info:    { main: '#3b7ea1', contrastText: '#ffffff' },
    success: { main: '#4c8a52', contrastText: '#ffffff' },
    background: {
      default: '#0f0c0d',
      paper:   '#1d1819',
    },
    text: {
      primary:   '#e7e2df',
      secondary: '#a49e9b',
      disabled:  '#6b6562',
    },
    divider: '#33292b',
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Oswald", sans-serif', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' },
    h2: { fontFamily: '"Oswald", sans-serif', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase' },
    button: { fontWeight: 600, textTransform: 'none' },
  },
});

export default customTheme;
