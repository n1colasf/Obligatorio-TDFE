import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  guardarMoneda,
  guardarTotal,
} from "../../../features/transaccionSlice";

//bug: falta corregir que al cambiar la moneda se cambie el total en el otro componente
const Input_moneda_Trans = () => {
  const monedas = useSelector((state) => state.monedas.monedas);

  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  let select_monedas = document.getElementById("inp_trans_moneda");

  const capturarValor = () => {
    let valorIdMoneda = input_usuario.current.value;
    dispatch(guardarMoneda(valorIdMoneda));

    let valor_moneda = document.getElementById("inp_trans_valor");
    {
      monedas.forEach((moneda) => {
        if (moneda.id == valorIdMoneda) {
          valor_moneda.innerHTML = `Valor: $` + ` ` + moneda.cotizacion;
        }
      });
    }
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">moneda: </label>
        <select
          className="form-select"
          id="inp_trans_moneda"
          ref={input_usuario}
          defaultValue="default"
          onChange={capturarValor}
        >
          <option value="default" disabled>
            seleccione moneda
          </option>
          {monedas.forEach((moneda) => {
            select_monedas.innerHTML += `<option value="${moneda.id}">${moneda.nombre}</option>`;
          })}
        </select>
        <div className="row">
          <label className="text-muted" id="inp_trans_valor">
            Valor:
          </label>
        </div>
      </div>
    </div>
  );
};

export default Input_moneda_Trans;
