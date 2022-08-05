import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item_lista_Suger from "./Item_lista_Suger";

const Input_lista_Suger = () => {
  const [sugerencia, setSugerencia] = useState([]);

  const transacciones = useSelector(
    (store) => store.usuarioLogin.transacciones
  );
  const monedas = useSelector((store) => store.monedas.monedas);

  //bug: falta resolver la logica para que no se repita la sugerencia
  useEffect(() => {
    for (let m = 0; m <= monedas.length - 1; m++) {
      for (let i = transacciones.length - 1; i >= 0; i--) {
        let obj = [];
        if (transacciones[i].moneda === monedas[m].id) {
          if (transacciones[i].tipo_operacion === 1) {
            if (transacciones[i].valor_actual < monedas[m].cotizacion) {
              obj = {
                operacion: "Vender",
                nombreMoneda: monedas[m].nombre,
                id: monedas[m].id,
              };
              setSugerencia((suger) => [...suger, obj]);
              break;
            } else {
              obj = {
                operacion: "Comprar",
                nombreMoneda: monedas[m].nombre,
                id: monedas[m].id,
              };
              setSugerencia((suger) => [...suger, obj]);
              break;
            }
          } else if (transacciones[i].tipo_operacion === 2) {
            if (transacciones[i].valor_actual > monedas[m].cotizacion) {
              obj = {
                operacion: "Comprar",
                nombreMoneda: monedas[m].nombre,
                id: monedas[m].id,
              };
              setSugerencia((suger) => [...suger, obj]);
              break;
            } else {
              obj = {
                operacion: "Vender",
                nombreMoneda: monedas[m].nombre,
                id: monedas[m].id,
              };
              setSugerencia((suger) => [...suger, obj]);
              break;
            }
          }
        }
      }
    }
  }, [transacciones]);

  return (
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="list-group">
            {sugerencia.map((suger) => (
              <Item_lista_Suger key={suger.id} {...suger} />
            ))}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Input_lista_Suger;
