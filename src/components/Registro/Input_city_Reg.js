import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guardarCity } from "../../features/registroSlice";

const InputCityReg = () => {
  const dispatch = useDispatch();

  const ciudades = useSelector((state) => state.ciudades.ciudades);

  const input_usuario = useRef(null);

  const capturarValor = () => {
    const valor = input_usuario.current.value;
    dispatch(guardarCity(valor));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">
          ciudad:
          <select
            className="form-select"
            id="inp_reg_ciudad"
            ref={input_usuario}
            defaultValue="default"
            onChangeCapture={capturarValor}
          >
            <option value="default" disabled>
              seleccione ciudad
            </option>
            {ciudades.map((cit) => (
              <option key={cit.id} value={cit.id}>
                {cit.nombre}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default InputCityReg;
