import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { guardarTrans } from "../features/loginSlice";
import { guardarMonedas } from "../features/monedasSlice";

//COMPONENTES
import CrearTransaccion from "./Dashboard/CrearTransaccion";
import MontoInvertido from "./Dashboard/MontoInvertido";
import ListarTransacciones from "./Dashboard/ListarTransacciones";
import SugerenciaIA from "./Dashboard/SugerenciaIA";
import GraficoComprados from "./Dashboard/GraficoComprados";
import GraficoVendidos from "./Dashboard/GraficoVendidos";
import GraficoMonedas from "./Dashboard/GraficoMonedas";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    var apiKey = localStorage.getItem("apiKey");
    var idUsuario = localStorage.getItem("id");

    const urlMoneda = `https://crypto.develotion.com/monedas.php`;
    const urlTrans = `https://crypto.develotion.com/transacciones.php?idUsuario=${idUsuario}`;

    fetch(urlMoneda, {
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarMonedas(data.monedas));
      });
    fetch(urlTrans, {
      headers: {
        apikey: apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarTrans(data.transacciones));
      });
  }, []);

  const autologin = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <input
          className="btn btn-success  text-center"
          type="button"
          id="btn_test_login"
          value="ir a login"
          onClick={autologin}
        ></input>

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
        <br />
        <br />
      </div>
    </>
  );
};

export default Dashboard;
