import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuario: "",
  pass: "",
  apikey: "",
  id: 0,
};

export const loginSlice = createSlice({
  name: "usuarioLogin",
  initialState,
  reducers: {
    guardarUsuario: (state, action) => {
      state.usuario = action.payload;
    },
    guardarPass: (state, action) => {
      state.pass = action.payload;
    },
    guardarApi: (state, action) => {
      state.apikey = action.payload;
    },
    guardarId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { guardarUsuario, guardarPass, guardarApi, guardarId } =
  loginSlice.actions;
export default loginSlice.reducer;
