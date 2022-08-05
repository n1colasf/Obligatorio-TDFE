import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sugerencias: [],
};

export const sugerenciaSlice = createSlice({
  name: "sugerencias",
  initialState,
  reducers: {
    agregarSugerencias: (state, action) => {
      state.sugerencias = action.payload;
    },
  },
});

export const { agregarSugerencias } = sugerenciaSlice.actions;
export default sugerenciaSlice.reducer;
