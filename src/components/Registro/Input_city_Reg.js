import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { guardarCity } from "../../features/registroSlice";

const Input_city_Reg = () => {
  const dispatch = useDispatch();

  const deptos = useSelector((state) => state.departamentos.departamentos);
  const ciudades = useSelector((state) => state.ciudades.ciudades);

  const input_usuario = useRef(null);

  const capturarValor = () => {
    let valor = input_usuario.current.value;
    dispatch(guardarCity(valor));
  };

  let select_ciudades = document.getElementById("inp_reg_ciudad");
  let select_depto = useSelector(
    (store) => store.usuarioRegistro.idDepartamento
  );

  //bug: se selecciona la primera ciudad en vez de mostrar el valor default
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">ciudad: </label>
        <select
          className="form-select"
          id="inp_reg_ciudad"
          ref={input_usuario}
          defaultValue="default"
          onChange={capturarValor}
        >
          <option value="default" disabled>
            seleccione ciudad
          </option>
          {ciudades.forEach((ciudad) => {
            if (ciudad.id_departamento == select_depto) {
              select_ciudades.innerHTML += `<option value="${ciudad.id}">${ciudad.nombre}</option>`;
            }
          })}
        </select>
      </div>
    </div>
  );
};

export default Input_city_Reg;
