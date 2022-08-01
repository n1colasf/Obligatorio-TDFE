import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departamentos: [],
};

export const departamentosSlice = createSlice({
  name: "departamentos",
  initialState,
  reducers: {
    guardarDeptos: (state, action) => {
      state.departamentos = action.payload;
    },
  },
});

export const { guardarDeptos } = departamentosSlice.actions;
export default departamentosSlice.reducer;
