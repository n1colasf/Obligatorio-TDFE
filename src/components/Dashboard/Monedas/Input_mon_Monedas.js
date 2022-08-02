import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoneda } from "../../../features/monedasSlice";

const Input_mon_Monedas = () => {
  const monedas = useSelector((state) => state.monedas.monedas);

  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  let select_monedas = document.getElementById("inp_mon_monedas");

  const capturarValor = () => {
    let valorIdMoneda = input_usuario.current.value;
    dispatch(selectMoneda(valorIdMoneda));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">moneda: </label>
        <select
          className="form-select"
          id="inp_mon_monedas"
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
          <label className="text-muted" id="inp_grafico_monedas"></label>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Input_mon_Monedas;
