import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: "not-authenticated",
    id: null,
    errorMessage: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: { 
        logout: (state) => {
            state.status = "not-authenticated"
            state.id = null
            state.errorMessage = ""
        },

        login: (state, { payload }) => {
            state.status = "authenticated"
            state.id = payload.id
            state.errorMessage = ""
        },

        checking: (state) => {
            state.status = "checking"
        }
    },
});

export const { logout, login, checking } = authSlice.actions;