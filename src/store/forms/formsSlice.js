import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    forms: []
}

export const formsSlice = createSlice({
    name: 'forms',
    initialState: initialState,
    reducers: {  
        clearForms: (state) => {
            state.forms = []
        }
    },
});

export const { clearForms } = formsSlice.actions;