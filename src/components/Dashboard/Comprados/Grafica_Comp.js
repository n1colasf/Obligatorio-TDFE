import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { agregarCompras } from "../../../features/graficasSlice";

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

const Grafica_Comp = () => {
  const monedas = useSelector((state) => state.monedas.monedas);
  const transacciones = useSelector(
    (state) => state.usuarioLogin.transacciones
  );
  const graficaCompras = useSelector((state) => state.graficas.graficaCompras);
  const dispatch = useDispatch();

  let suma = 0;

  useEffect(() => {
    monedas.forEach((moneda) => {
      suma = 0;
      transacciones.forEach((transaccion) => {
        if (transaccion.moneda === moneda.id) {
          if (transaccion.tipo_operacion === 1) {
            suma += transaccion.cantidad * transaccion.valor_actual;
          }
        }
      });
      dispatch(agregarCompras(suma));
    });
  }, []);

  console.log(graficaCompras);

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
            labels: monedas.map((moneda) => moneda.nombre),
            datasets: [
              {
                label: "monto por moneda",
                data: graficaCompras,
                backgroundColor: "rgba(0, 119, 234, 0.8)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Grafica_Comp;
