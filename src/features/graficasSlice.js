import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  graficaVentas: [],
  graficaCompras: [],
};

export const graficasSlice = createSlice({
  name: "graficas",
  initialState,
  reducers: {
    agregarVentas: (state, action) => {
      state.graficaVentas = action.payload;
    },
    agregarCompras: (state, action) => {
      state.graficaCompras = action.payload;
    },
  },
});

export const { agregarVentas, agregarCompras } = graficasSlice.actions;
export default graficasSlice.reducer;
