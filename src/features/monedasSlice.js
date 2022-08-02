import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monedas: [],
};

export const monedasSlice = createSlice({
  name: "monedas",
  initialState,
  reducers: {
    guardarMonedas: (state, action) => {
      state.monedas = action.payload;
    },
  },
});

export const { guardarMonedas } = monedasSlice.actions;
export default monedasSlice.reducer;
