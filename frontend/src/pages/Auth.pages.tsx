import { useState } from 'react';
import {
  Alert,
  Box,
  Container,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import MessAngerIcon from '../../branding/mess-anger-icon.svg';
import {useLoginMutation, useRegisterMutation} from "../api/auth.api";
import {AuthValues} from "../schema/auth.schema";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AuthForm} from "../components/AuthForm";

type Mode = 'login' | 'register';

interface AuthPageProps {
  initialMode?: Mode;
}


function extractError(error: unknown): string | null {
  if (error && typeof error === 'object' && 'data' in error) {
    const data = (error as { data?: { error?: unknown } }).data;
    if (data?.error) return String(data.error);
  }
  return error ? 'Что-то пошло не так' : null;
}

export const AuthPage = ({initialMode}: AuthPageProps) => {
  const [mode, setMode] = useState<Mode>(initialMode || 'login');
  const [login, loginState] = useLoginMutation();
  const [registerUser, registerState] = useRegisterMutation();
  const active = mode === 'login' ? loginState : registerState;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (values: AuthValues) => {
    try {
      if (mode === 'login') {
        const res = await login(values).unwrap();
        dispatch({ type: 'ADD_USER', payload: { user: res.user, token: res.token } });
        navigate('/');
      } else {
        await registerUser(values).unwrap();
        setMode('login');
      }
    } catch {
      return;
    }
  };

  const serverError = extractError(active.error);

  return (
    <Container maxWidth="xs" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{display:'flex', alignItems: 'center', justifyContent: 'center', gap:1.5, mb:2}}>
          <MessAngerIcon height={'32'} width={'32'}/>
          <Typography variant="h5" component="h1">
            Mess Anger
          </Typography>
        </Box>
        <Tabs value={mode} onChange={(_event, value: Mode) => setMode(value)} variant="fullWidth" sx={{ mb: 2 }}>
          <Tab label="Вход" value="login" />
          <Tab label="Регистрация" value="register" />
        </Tabs>
        <AuthForm key={mode} mode={mode} loading={active.isLoading} onSubmit={onSubmit} />
        {serverError &&
          <Alert severity="error" sx={{ mt: 2 }}>
            {serverError}
          </Alert>
        }
      </Paper>
    </Container>
  );
};

export default AuthPage;
