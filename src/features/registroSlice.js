import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuario: "",
  pass: "",
  idDepartamento: 0,
  idCiudad: 0,
};

export const registroSlice = createSlice({
  name: "usuarioLogin",
  initialState,
  reducers: {
    guardarUsuario: (state, action) => {
      state.usuario = action.payload;
    },
    guardarPass: (state, action) => {
      state.pass = action.payload;
    },
    guardarDepto: (state, action) => {
      state.idDepartamento = action.payload;
    },
    guardarCity: (state, action) => {
      state.idCiudad = action.payload;
    },
  },
});

export const { guardarUsuario, guardarPass, guardarDepto, guardarCity } =
  registroSlice.actions;
export default registroSlice.reducer;
