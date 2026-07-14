import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './theme';
import { App } from './App';

describe('App', () => {
  it('renders the 404 page on unknown route', () => {
    render(
        <ThemeProvider theme={customTheme}>
          <App />
        </ThemeProvider>
    );
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
  });
});