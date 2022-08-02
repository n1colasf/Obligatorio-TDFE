import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monedas: [],
  monedaSelect: 0,
};

export const monedasSlice = createSlice({
  name: "monedas",
  initialState,
  reducers: {
    guardarMonedas: (state, action) => {
      state.monedas = action.payload;
    },
    selectMoneda: (state, action) => {
      state.monedaSelect = action.payload;
    },
  },
});

export const { guardarMonedas, selectMoneda } = monedasSlice.actions;
export default monedasSlice.reducer;
