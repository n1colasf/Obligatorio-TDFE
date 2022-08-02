import { useRef } from "react";
import { useDispatch } from "react-redux";
import { guardarCity } from "../../features/registroSlice";
import { useSelector } from "react-redux";

const Input_city_Reg = () => {
  const ciudades = useSelector((state) => state.ciudades.ciudades);

  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  const capturarValor = () => {
    let valor = input_usuario.current.value;
    dispatch(guardarCity(valor));
  };

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
          //bug: falta agregar las ciudades al select!
          <option value="default" disabled>
            Seleccione ciudad
          </option>
        </select>
      </div>
    </div>
  );
};

export default Input_city_Reg;
