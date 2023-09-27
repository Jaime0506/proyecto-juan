import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

export const formsSlice = createSlice({
    name: 'forms',
    initialState: initialState,
    reducers: {  
        clearForms: (state) => {
            state.forms = []
        },

        loadingForms: (state, { payload }) => {
            state.data = payload
        }
    },
});

export const { clearForms, loadingForms } = formsSlice.actions;