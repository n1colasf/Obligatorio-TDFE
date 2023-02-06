import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  guardarCantidad,
  guardarTotal,
} from "../../../features/transaccionSlice";

const InputCantTrans = () => {
  const monedas = useSelector((state) => state.monedas.monedas);
  const idMoneda = useSelector((state) => state.transaccion.moneda);

  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  let valor_total = document.getElementById("trans_valor_tot");

  const capturarValor = () => {
    let valorCantidad = input_usuario.current.value;
    dispatch(guardarCantidad(valorCantidad));
    {
      monedas.forEach((moneda) => {
        if (moneda.id == idMoneda) {
          valor_total.innerHTML =
            `Total: $` +
            ` ` +
            (valorCantidad * moneda.cotizacion);
          dispatch(guardarTotal(valorCantidad * moneda.cotizacion));
        }
      });
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <label id="inicio">cantidad: </label>
          <input
            type="text"
            ref={input_usuario}
            id="inp_trans_total"
            className="form-control"
            onKeyUp={capturarValor}
            placeholder="ingrese una cantidad"
          />
          <label className="text-muted" id="trans_valor_tot">
            Total:
          </label>
        </div>
      </div>
    </>
  );
};
export default InputCantTrans;
