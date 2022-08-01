import { configureStore } from "@reduxjs/toolkit";
import departamentosReducer from "../features/departamentosSlice";

export const store = configureStore({
    reducer: {
        departamentos: departamentosReducer,
    }

})