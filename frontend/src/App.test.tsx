import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';

function renderWithStore() {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

describe('App', () => {
  it('renders the app shell', () => {
    renderWithStore();
    expect(screen.getByRole('heading', { name: /messanger/i })).toBeInTheDocument();
  });
});
