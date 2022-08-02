import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { guardarApi, guardarId } from "../../features/loginSlice";
import { useNavigate } from "react-router-dom";

const Input_btn_Reg = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usuario = useSelector((store) => store.usuarioRegistro.usuario);
  const pass = useSelector((store) => store.usuarioRegistro.pass);
  const depto = useSelector((store) => store.usuarioRegistro.idDepartamento);
  const city = useSelector((store) => store.usuarioRegistro.idCiudad);

  const registrarUsuario = () => {
    const url = "https://crypto.develotion.com/usuarios.php";
    const datos = {
      usuario: usuario,
      password: pass,
      idDepartamento: depto,
      idCiudad: city,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarApi(data.apiKey));
        dispatch(guardarId(data.id));
        navigate("/dashboard");
      });
  };

  return (
    <div className="row">
      <div className="col centrado">
        <br />
        <input
          onClick={registrarUsuario}
          className="btn azul"
          type="button"
          id="btn_registro"
          value="registrarse"
        />
      </div>
    </div>
  );
};

export default Input_btn_Reg;
