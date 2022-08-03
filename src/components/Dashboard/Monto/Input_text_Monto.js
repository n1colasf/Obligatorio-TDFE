import { useSelector } from "react-redux";

const Input_text_Monto = () => {
  const transacciones = useSelector(
    (state) => state.usuarioLogin.transacciones
  );
  const totalTrans = useSelector(
    (state) => state.usuarioLogin.totalTransacciones
  );

  let montoTotal = 0;

  transacciones.forEach((trans) => {
    if (trans.tipo_operacion === 1)
      montoTotal -= trans.cantidad * trans.valor_actual;
    else {
      montoTotal += trans.cantidad * trans.valor_actual;
    }
  });

  if (montoTotal > 0) {
  } else {
  }

  return (
    <div className="row justify-content-center">
      <h2 className="gigante centrado" id="tot-trans">
        {montoTotal.toLocaleString("en-US")}
      </h2>
      <p className="centrado" id="tot-mensaje"></p>
    </div>
  );
};

export default Input_text_Monto;
