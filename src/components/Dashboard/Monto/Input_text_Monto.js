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

  let mensaje = "";
  if (montoTotal > 0) {
    mensaje = "¡Muy buenas inversiones! ¡Sigue así!";
  } else {
    mensaje = "¡No desesperes! ¡Ya casi lo tienes!";
  }

  return (
    <div className="row justify-content-center">
      <h2 className="gigante centrado" id="tot-trans">
        $ {montoTotal.toLocaleString("en-US")}
      </h2>
      <p className="centrado mediano" id="tot-mensaje">
        {mensaje}
      </p>
    </div>
  );
};

export default Input_text_Monto;
