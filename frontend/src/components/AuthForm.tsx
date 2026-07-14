import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import { loginSchema, registerSchema, type AuthValues } from '../schema/auth.schema';

interface AuthFormProps {
    mode: 'login' | 'register';
    loading: boolean;
    onSubmit: (values: AuthValues) => void;
}

export const AuthForm = ({ mode, loading, onSubmit }: AuthFormProps) => {
    const schema = mode === 'login' ? loginSchema : registerSchema;
    const { control, handleSubmit } = useForm<AuthValues>({
        resolver: zodResolver(schema),
        defaultValues: { login: '', passwordRaw: '' },
    });

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Controller
                name="login"
                control={control}
                render={({ field, fieldState }) => (
                    <TextField {...field} label="Логин" fullWidth margin="normal" autoComplete="username"
                               error={!!fieldState.error} helperText={fieldState.error?.message} />
                )}
            />
            <Controller
                name="passwordRaw"
                control={control}
                render={({ field, fieldState }) => (
                    <TextField {...field} label="Пароль" type="password" fullWidth margin="normal"
                               autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                               error={!!fieldState.error} helperText={fieldState.error?.message} />
                )}
            />
            <Button type="submit" variant="contained" fullWidth disabled={loading} sx={{ mt: 2 }}>
                {loading ? <CircularProgress size={24} /> : mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </Box>
    );
};