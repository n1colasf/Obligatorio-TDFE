import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { guardarCity } from "../../features/registroSlice";

const InputCityReg = () => {
  const dispatch = useDispatch();

  const deptos = useSelector((state) => state.departamentos.departamentos);
  const ciudades = useSelector((state) => state.ciudades.ciudades);

  const input_usuario = useRef(null);

  const capturarValor = () => {
    let valor = input_usuario.current.value;
    dispatch(guardarCity(valor));
  };
  let select_depto = useSelector(
    (store) => store.usuarioRegistro.idDepartamento
  );

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
          {ciudades
            .filter((city) => city.id_departamento == select_depto)
            .map((cit) => (
              <option key={cit.id} value={cit.id}>
                {cit.nombre}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default InputCityReg;
