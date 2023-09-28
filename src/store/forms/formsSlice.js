import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

export const formsSlice = createSlice({
    name: 'forms',
    initialState: initialState,
    reducers: {  
        clearForms: (state) => {
            state.data = []
        },

        loadingForms: (state, { payload }) => {
            state.data = payload
        },

        updateForms: (state, { payload }) => {
            state.data = state.data.map((form) => {
                if (form.id === payload.id) {
                    form.state = !payload.state

                    return form
                }

                return form
            })
        }

    },
});

export const { clearForms, loadingForms, updateForms } = formsSlice.actions;