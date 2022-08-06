import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraficaMonedas = () => {
  const transacciones = useSelector(
    (store) => store.usuarioLogin.transacciones
  );
  const selectMonedas = useSelector((store) => store.monedas.monedaSelect);

  return (
    <div>
      <div className="card-body">
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: false,
                text: "dinero total invertido en compras por moneda",
              },
            },
          }}
          data={{
            labels: transacciones
              .filter((trans) => trans.moneda == selectMonedas)
              .map((trans) => "Id: " + trans.id),
            datasets: [
              {
                label: "Cotizacion $",
                data: transacciones
                  .filter((trans) => trans.moneda == selectMonedas)
                  .filter((trans) => trans.moneda != 0)
                  .map((trans) => trans.valor_actual),
                backgroundColor: "rgba(0, 119, 234, 0.8)",
                borderColor: "rgba(0, 119, 234, 0.8)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default GraficaMonedas;
