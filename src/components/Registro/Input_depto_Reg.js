import { useRef } from "react";
import { useDispatch } from "react-redux";
import { guardarDepto } from "../../features/registroSlice";

import { useSelector } from "react-redux";

const Input_depto_Reg = () => {
  const departamentos = useSelector(
    (state) => state.departamentos.departamentos
  );

  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  const capturarValor = () => {
    let valor = input_usuario.current.value;
    dispatch(guardarDepto(valor));
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">departamento: </label>
        <select
          className="form-select"
          id="inp_reg_depto"
          defaultValue="default"
          ref={input_usuario}
          onChange={capturarValor}
        >
          //bug: falta agregar los departamentos al select!
          <option value="default">seleccione departamento</option>
          {departamentos.forEach((depto) => {
            <option value={depto.id}>{depto.nombre}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Input_depto_Reg;
