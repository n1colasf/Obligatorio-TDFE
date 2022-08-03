import { useDispatch, useSelector } from "react-redux";
import { guardarApi, guardarId } from "../../features/loginSlice";
import { useNavigate } from "react-router-dom";

const Input_btn_Login = () => {
  const dispatch = useDispatch();
  const usuario = useSelector((store) => store.usuarioLogin.usuario);
  const pass = useSelector((store) => store.usuarioLogin.pass);

  const navigate = useNavigate();

  const iniciarSesion = () => {
    const url = "https://crypto.develotion.com/login.php";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        usuario: usuario,
        password: pass,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarApi(data.apiKey));
        dispatch(guardarId(data.id));
        localStorage.setItem("apiKey", data.apiKey);
        localStorage.setItem("id", data.id);
        navigate("/dashboard");
      });
  };

  return (
    <div className="row">
      <div className="col centrado">
        <br />
        <input
          className="btn azul"
          type="button"
          id="btn_login"
          value="ingresar"
          onClick={iniciarSesion}
        />
      </div>
    </div>
  );
};

export default Input_btn_Login;
