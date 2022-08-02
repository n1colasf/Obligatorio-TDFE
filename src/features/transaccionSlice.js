import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tipoOperacion: 0,
  moneda: 0,
  cantidad: 0,
  total: 0,
};

export const transaccionSlice = createSlice({
  name: "monedas",
  initialState,
  reducers: {
    guardarTipo: (state, action) => {
      state.tipoOperacion = action.payload;
    },
    guardarMoneda: (state, action) => {
      state.moneda = action.payload;
    },
    guardarCantidad: (state, action) => {
      state.cantidad = action.payload;
    },
    guardarTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { guardarTipo, guardarMoneda, guardarCantidad, guardarTotal } =
  transaccionSlice.actions;
export default transaccionSlice.reducer;
