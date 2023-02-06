import { useSelector } from "react-redux";

const InputTextMonto = () => {
  const transacciones = useSelector(
    (state) => state.usuarioLogin.transacciones
  );

  let montoTotal = 0;

  transacciones.forEach((trans) => {
    if (trans.tipoOperacion === 1)
      montoTotal -= trans.cantidad * trans.valorActual;
    else {
      montoTotal += trans.cantidad * trans.valorActual;
    }
  });

  return (
    <div className="row justify-content-center">
      <h2 className="gigante centrado" id="tot-trans">
        $ {montoTotal.toLocaleString("en-US")}
      </h2>
      <div className="centrado mediano" id="tot-mensaje">
        {montoTotal >= 0 ? (
          <p className="text-success">¡Muy buenas inversiones! ¡Sigue así!</p>
        ) : (
          <p className="text-danger">¡No desesperes! ¡Ya casi lo tienes!</p>
        )}
      </div>
    </div>
  );
};

export default InputTextMonto;
