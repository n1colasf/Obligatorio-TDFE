import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarTipo } from "../../../features/transaccionSlice";

const Input_tipo_Trans = () => {
  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  const capturarValor = () => {
    let valorIdMoneda = input_usuario.current.value;
    dispatch(guardarTipo(valorIdMoneda));
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">tipo: </label>
        <select
          className="form-select"
          id="inp_trasn_tipo"
          ref={input_usuario}
          defaultValue="default"
          onChange={capturarValor}
        >
          <option value="default" disabled>
            seleccione operación
          </option>
          ;<option value="1">Comprar</option>
          <option value="2">Vender</option>
        </select>
      </div>
    </div>
  );
};

export default Input_tipo_Trans;
