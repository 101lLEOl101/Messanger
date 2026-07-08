import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('renders the app shell', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /messanger/i })).toBeInTheDocument();
  });

  it('renders the send button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });
});