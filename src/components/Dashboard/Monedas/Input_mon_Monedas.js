import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoneda } from "../../../features/monedasSlice";

const Input_mon_Monedas = () => {
  const monedas = useSelector((state) => state.monedas.monedas);

  const input_usuario = useRef(null);
  const dispatch = useDispatch();

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
          {monedas.map((moneda) => (
            <option key={moneda.id} value={moneda.id}>
              {moneda.nombre}
            </option>
          ))}
        </select>
        <div className="row">
          <label className="text-muted" id="inp_grafico_monedas"></label>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Input_mon_Monedas;
