import "./App.css";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Dashboard from "./components/Dashboard";
import { store } from "./store/store";
import { Provider } from "react-redux";

//*IMPORTS AUXILIARES PARA AUTOLIGIN ******************************************************
import { useDispatch } from "react-redux";
import { guardarApi, guardarId, guardarTrans } from "./features/loginSlice";
import { guardarMonedas } from "./features/monedasSlice";
//*****************************************************************************************

function App() {
  //*DISPATCH Y FUNCION AUTOLIGIN AUXILIAR ************************************************
  const dispatch = useDispatch();
  const autologin = () => {
    const usuario = "Nicolas";
    const password = "Fernandez";
    const urlLogin = "https://crypto.develotion.com/login.php";
    fetch(urlLogin, {
      method: "POST",
      body: JSON.stringify({ usuario: usuario, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarApi(data.apiKey));
        dispatch(guardarId(data.id));
        mostrar_monedas(data.apiKey);
        mostrar_transacciones(data.apiKey, data.id);
      });
  };
  //*GUARDAR MONEDAS EN STORE ***************************************************************
  const mostrar_monedas = (apiKey) => {
    const url = `https://crypto.develotion.com/monedas.php`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarMonedas(data.monedas));
      });
  };
  //*GUARDAR TRANSACCIONES DE USUARIO EN STORE **********************************************
  const mostrar_transacciones = (apiKey, id) => {
    const url = `https://crypto.develotion.com/transacciones.php?idUsuario=${id}`;
    fetch(url, {
      headers: {
        apikey: apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarTrans(data.transacciones));
      });
  };
  //*****************************************************************************************

  return (
    <Provider store={store}>
      <div className="container">
        <Login />
        <br />
        <Registro />
        <br />
        <input
          className="btn btn-danger  text-center"
          type="button"
          id="btn_test_login"
          value="test dashboard"
          onClick={autologin}
        ></input>
        <Dashboard />
        <br />
        <br />
      </div>
    </Provider>
  );
}

export default App;
