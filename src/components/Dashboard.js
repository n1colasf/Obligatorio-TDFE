//COMPONENTES
import CrearTransaccion from "./Dashboard/CrearTransaccion";
import MontoInvertido from "./Dashboard/MontoInvertido";
import ListarTransacciones from "./Dashboard/ListarTransacciones";
import SugerenciaIA from "./Dashboard/SugerenciaIA";
import GraficoComprados from "./Dashboard/GraficoComprados";
import GraficoVendidos from "./Dashboard/GraficoVendidos";
import GraficoMonedas from "./Dashboard/GraficoMonedas";

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
