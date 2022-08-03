import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Grafica_Vendido = () => {
  return (
    <div>
      <div className="card-body">
        <Bar
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
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "MVDCoin",
                data: "1, 2, 3, 4, 5, 6",
                backgroundColor: "rgba(73, 237, 230, 0.8)",
              },
              {
                label: "MVDCoin",
                data: "1, 2, 4, 5",
                backgroundColor: "rgba(0, 154, 147, 0.8)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Grafica_Vendido;
