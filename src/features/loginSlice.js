import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuario: "",
  pass: "",
  apikey: "",
  id: 0,
  transacciones: [],
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
    guardarTrans: (state, action) => {
      state.transacciones = action.payload;
    },
    agregarTrans: (state, action) => {
      state.transacciones.push(action.payload);
    },
  },
});

export const {
  guardarUsuario,
  guardarPass,
  guardarApi,
  guardarId,
  guardarTrans,
  agregarTrans,
} = loginSlice.actions;
export default loginSlice.reducer;
