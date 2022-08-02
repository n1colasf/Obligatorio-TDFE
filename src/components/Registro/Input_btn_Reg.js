import { store } from "../../store/store";
import { useDispatch } from "react-redux";
import { guardarApi, guardarId } from "../features/loginSlice";

const Input_btn_Reg = () => {
  const dispatch = useDispatch();

  const registrarUsuario = () => {
    const url = "https://crypto.develotion.com/usuarios.php";

    const datos = {
      usuario: store.usuarioRegistro.usuario,
      password: store.usuarioRegistro.pass,
      idDepartamento: store.usuarioRegistro.idDepartamento,
      idCiudad: store.usuarioRegistro.idCiudad,
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
