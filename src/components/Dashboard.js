import CrearTransaccion from "./Dashboard/CrearTransaccion";
import MontoInvertido from "./Dashboard/MontoInvertido";
import ListarTransacciones from "./Dashboard/ListarTransacciones";

const Dashboard = () => {
  return (
    <>
      <div class="card shadow">
        <br />
        <CrearTransaccion />
      </div>
      <div class="card shadow">
        <br />
        <MontoInvertido />
      </div>
      <div class="card shadow">
        <br />
        <ListarTransacciones />
      </div>
      <br />
      <br />
    </>
  );
};

export default Dashboard;
