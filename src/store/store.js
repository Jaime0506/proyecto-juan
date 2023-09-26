import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { formsSlice } from "./forms/formsSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        forms: formsSlice.reducer
    }
})