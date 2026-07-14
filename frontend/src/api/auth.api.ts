import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthResponse, SafeUser, AuthDto } from '../interfaces/auth.interfaces';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, AuthDto>({
            query: (body) => ({ url: '/login', method: 'POST', body }),
        }),
        register: builder.mutation<SafeUser, AuthDto>({
            query: (body) => ({ url: '/register', method: 'POST', body }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;