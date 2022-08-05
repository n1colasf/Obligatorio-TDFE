import { useSelector } from "react-redux";

const Input_text_Monto = () => {
  const transacciones = useSelector(
    (state) => state.usuarioLogin.transacciones
  );

  let montoTotal = 0;

  transacciones.forEach((trans) => {
    if (trans.tipo_operacion === 1)
      montoTotal -= trans.cantidad * trans.valor_actual;
    else {
      montoTotal += trans.cantidad * trans.valor_actual;
    }
  });

  return (
    <div className="row justify-content-center">
      <h2 className="gigante centrado" id="tot-trans">
        $ {montoTotal.toLocaleString("en-US")}
      </h2>
      <div className="centrado mediano" id="tot-mensaje">
        {montoTotal > 0 ? (
          <p className="text-success">¡Muy buenas inversiones! ¡Sigue así!</p>
        ) : (
          <p className="text-danger">¡No desesperes! ¡Ya casi lo tienes!</p>
        )}
      </div>
    </div>
  );
};

export default Input_text_Monto;
