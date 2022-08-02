import { useDispatch, useSelector } from "react-redux";
import { agregarTrans } from "../../../features/loginSlice";

const Input_btn_Trans = () => {
  const dispatch = useDispatch();
  const idUsuario = useSelector((store) => store.usuarioLogin.id);
  const apiKey = useSelector((store) => store.usuarioLogin.apikey);

  const tipo = useSelector((store) => store.transaccion.tipoOperacion);
  const moneda = useSelector((store) => store.transaccion.moneda);
  const cantidad = useSelector((store) => store.transaccion.cantidad);

  const crearTransaccion = () => {
    const url = "https://crypto.develotion.com/transacciones.php";
    const transaccion = {
      usuarios_id: idUsuario,
      tipo_operacion: tipo,
      moneda: moneda,
      cantidad: cantidad,
      valor_actual: moneda.cotizacion,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(transaccion),
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        //bug: da ok la api pero no agrega la transaccion
        transaccion.id = data.idTransaccion;
        dispatch(agregarTrans(transaccion));
      });
  };
  return (
    <div className="row justify-content-center">
      <div className="col centrado">
        <input
          className="btn azul"
          type="button"
          id="btn_registro"
          onClick={crearTransaccion}
          value="crear transacción"
        />
        <br />
      </div>
    </div>
  );
};

export default Input_btn_Trans;
