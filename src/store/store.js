import { configureStore } from "@reduxjs/toolkit";

import departamentosReducer from "../features/departamentosSlice";
import ciudadesReducer from "../features/ciudadesSlice";
import usuarioLoginReducer from "../features/loginSlice";
import usuarioRegistroReducer from "../features/registroSlice";
import monedasReducer from "../features/monedasSlice";
import transaccionReducer from "../features/transaccionSlice";

export const store = configureStore({
  reducer: {
    departamentos: departamentosReducer,
    ciudades: ciudadesReducer,
    usuarioLogin: usuarioLoginReducer,
    usuarioRegistro: usuarioRegistroReducer,
    monedas: monedasReducer,
    transaccion: transaccionReducer,
  },
});
