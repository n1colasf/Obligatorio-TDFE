import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarDepto } from "../../features/registroSlice";

const Input_depto_Reg = () => {
  const departamentos = useSelector(
    (state) => state.departamentos.departamentos
  );

  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  const capturarValor = () => {
    let valor = input_usuario.current.value;
    dispatch(guardarDepto(valor));
    let select_ciudades = document.getElementById("inp_reg_ciudad");
    select_ciudades.innerHTML = `<option value="default" disabled>seleccione ciudad</option>`;
  };

  let select_deptos = document.getElementById("inp_reg_depto");

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
          <option value="default" disabled>
            seleccione departamento
          </option>
          {departamentos.forEach((depto) => {
            select_deptos.innerHTML += `<option value="${depto.id}">${depto.nombre}</option>`;
          })}
        </select>
      </div>
    </div>
  );
};

export default Input_depto_Reg;
