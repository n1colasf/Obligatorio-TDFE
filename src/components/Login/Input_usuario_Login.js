import { useRef } from "react";
import { useDispatch } from "react-redux";
import { guardarUsuario } from "../../features/loginSlice";

const Input_usuario_Login = () => {
  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  const capturarValor = () => {
    let valor = input_usuario.current.value;
    dispatch(guardarUsuario(valor));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">usuario: </label>
        <input
          type="text"
          ref={input_usuario}
          id="inp_usuario"
          className="form-control"
          onKeyUp={capturarValor}
        />
      </div>
    </div>
  );
};

export default Input_usuario_Login;
