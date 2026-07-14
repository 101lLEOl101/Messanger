import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../theme';
import { AuthForm } from './AuthForm';

const renderForm = (props = {}) =>
    render(
        <ThemeProvider theme={customTheme}>
            <AuthForm mode="login" loading={false} onSubmit={jest.fn()} {...props} />
        </ThemeProvider>
    );

describe('AuthForm', () => {
    it('renders fields', () => {
        renderForm();
        expect(screen.getByLabelText(/логин/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/пароль/i)).toBeInTheDocument();
    });

    it('blocks submit and shows error on empty login', async () => {
        const onSubmit = jest.fn();
        renderForm({ onSubmit });
        await userEvent.click(screen.getByRole('button', { name: /войти/i }));
        expect(await screen.findByText(/введите логин/i)).toBeInTheDocument();
        expect(onSubmit).not.toHaveBeenCalled();
    });

    it('calls onSubmit with valid values', async () => {
        const onSubmit = jest.fn();
        renderForm({ mode: 'register', onSubmit });
        await userEvent.type(screen.getByLabelText(/логин/i), 'leonid');
        await userEvent.type(screen.getByLabelText(/пароль/i), 'password123');
        await userEvent.click(screen.getByRole('button', { name: /зарегистрироваться/i }));
        await waitFor(() =>
            expect(onSubmit).toHaveBeenCalledWith(
                { login: 'leonid', passwordRaw: 'password123' },
                expect.anything()
            )
        );
    });
});