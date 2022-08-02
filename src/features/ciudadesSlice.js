import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ciudades: [],
};

export const ciudadesSlice = createSlice({
  name: "ciudades",
  initialState,
  reducers: {
    guardarCitys: (state, action) => {
      state.ciudades = action.payload;
    },
  },
});

export const { guardarCitys } = ciudadesSlice.actions;
export default ciudadesSlice.reducer;
