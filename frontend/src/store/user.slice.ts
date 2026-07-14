import { createSlice } from '@reduxjs/toolkit';
import {SafeUser} from "../interfaces/auth.interfaces";
import {authApi} from "../api/auth.api";

interface UserState {
    user: SafeUser | null;
    token: string | null;
}

const initialState: UserState = {
    user: null,
    token: null,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { logout: (state) => { state.user = null; state.token = null; } },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
        });
    },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;