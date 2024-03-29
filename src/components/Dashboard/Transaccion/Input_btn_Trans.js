import { useDispatch, useSelector } from "react-redux";
import { agregarTrans } from "../../../features/loginSlice";

const InputBtnTrans = () => {
  const dispatch = useDispatch();

  const monedas = useSelector((store) => store.monedas.monedas);
  const idUsuario = useSelector((store) => store.usuarioLogin.id);
  const apiKey = useSelector((store) => store.usuarioLogin.apikey);

  const tipo = useSelector((store) => store.transaccion.tipoOperacion);
  const idMoneda = useSelector((store) => store.transaccion.moneda);
  const cantidad = useSelector((store) => store.transaccion.cantidad);

  let valorActMoneda = 0;
  monedas.forEach((moneda) => {
    if (moneda.id == idMoneda) {
      valorActMoneda = moneda.cotizacion;
    }
  });

  const crearTransaccion = () => {
    const url = "https://crypto.develotion.com/transacciones.php";
    const transaccion = {
      idUsuario: idUsuario,
      tipoOperacion: Number(tipo),
      moneda: Number(idMoneda),
      cantidad: Number(cantidad),
      valorActual: Number(valorActMoneda),
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
        const aux = {
          id: data.id,
          usuarios_id: transaccion.idUsuario,
          tipoOperacion: transaccion.tipoOperacion,
          moneda: Number(transaccion.moneda),
          cantidad: Number(transaccion.cantidad),
          valorActual: Number(transaccion.valorActual),
        };
        dispatch(agregarTrans(aux));
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
          disabled={
            tipo === 0 || idMoneda === 0 || cantidad === 0 || cantidad === ""
          }
        />
        <br />
      </div>
    </div>
  );
};

export default InputBtnTrans;
