import { configureStore } from "@reduxjs/toolkit";

import departamentosReducer from "../features/departamentosSlice";
import ciudadesReducer from "../features/ciudadesSlice";
import usuarioLoginReducer from "../features/loginSlice";
import usuarioRegistroReducer from "../features/registroSlice";
import monedasReducer from "../features/monedasSlice";
import transaccionReducer from "../features/transaccionSlice";
import graficasReducer from "../features/graficasSlice";
import sugerenciaReducer from "../features/sugerenciasSlice";

export const store = configureStore({
  reducer: {
    departamentos: departamentosReducer,
    ciudades: ciudadesReducer,
    usuarioLogin: usuarioLoginReducer,
    usuarioRegistro: usuarioRegistroReducer,
    monedas: monedasReducer,
    transaccion: transaccionReducer,
    graficas: graficasReducer,
    sugerencias: sugerenciaReducer,
  },
});
