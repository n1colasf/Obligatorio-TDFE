//COMPONENTES
import CrearTransaccion from "./Dashboard/CrearTransaccion";
import MontoInvertido from "./Dashboard/MontoInvertido";
import ListarTransacciones from "./Dashboard/ListarTransacciones";
import SugerenciaIA from "./Dashboard/SugerenciaIA";
import GraficoComprados from "./Dashboard/GraficoComprados";
import GraficoVendidos from "./Dashboard/GraficoVendidos";
import GraficoMonedas from "./Dashboard/GraficoMonedas";

import { useDispatch } from "react-redux";
import { guardarApi, guardarId, guardarTrans } from "../features/loginSlice";
import { guardarMonedas } from "../features/monedasSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  //****************************************************************************************
  //*DISPATCH Y FUNCION AUTOLIGIN AUXILIAR ***************
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  //*GUARDAR MONEDAS EN STORE ******************
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
  //*GUARDAR TRANSACCIONES DE USUARIO EN STORE ***************
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

  const iralogin = () => {
    navigate("/");
  };
  //*****************************************************************************************
  return (
    <>
      <div className="container">
        <div>
          <input
            className="btn btn-danger text-center"
            type="button"
            id="btn_test_login"
            value="test dashboard"
            onClick={autologin}
          ></input>
          <input
            className="btn btn-success text-center"
            type="button"
            id="btn_test_login"
            value="login"
            onClick={iralogin}
          ></input>
        </div>
        <div className="card shadow">
          <br />
          <CrearTransaccion />
        </div>
        <div className="card shadow">
          <br />
          <ListarTransacciones />
        </div>
        <div className="card shadow">
          <br />
          <MontoInvertido />
        </div>
        <div className="card shadow">
          <br />
          <SugerenciaIA />
        </div>
        <div className="card shadow">
          <br />
          <GraficoComprados />
        </div>
        <div className="card shadow">
          <br />
          <GraficoVendidos />
        </div>
        <div className="card shadow">
          <br />
          <GraficoMonedas />
        </div>
        <br />
      </div>
    </>
  );
};

export default Dashboard;
