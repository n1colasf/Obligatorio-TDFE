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

  let boton;
  if (usuario === "" || pass === "" || depto === 0 || city === 0) {
    boton = true;
  }

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
      .then((respuesta) =>
        respuesta.ok
          ? respuesta.json()
          : respuesta
              .json()
              .then((error) => Promise.reject(error))
              .catch((e) => {
                alert(e.mensaje);
              })
      )
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
          onClick={registrarUsuario}
          className="btn azul"
          type="button"
          id="btn_registro"
          value="registrarse"
          disabled={boton}
        />
      </div>
    </div>
  );
};

export default Input_btn_Reg;
