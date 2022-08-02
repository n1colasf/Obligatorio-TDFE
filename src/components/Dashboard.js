//COMPONENTES
import CrearTransaccion from "./Dashboard/CrearTransaccion";
import MontoInvertido from "./Dashboard/MontoInvertido";
import ListarTransacciones from "./Dashboard/ListarTransacciones";

const Dashboard = () => {
  return (
    <>
      <div className="card shadow">
        <br />
        <CrearTransaccion />
      </div>
      <div className="card shadow">
        <br />
        <MontoInvertido />
      </div>
      <div className="card shadow">
        <br />
        <ListarTransacciones />
      </div>
      <br />
    </>
  );
};

export default Dashboard;
