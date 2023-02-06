import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemListaSuger from "./Item_lista_Suger";

const InputListaSuger = () => {
  const transacciones = useSelector(
    (store) => store.usuarioLogin.transacciones
  );
  const monedas = useSelector((store) => store.monedas.monedas);

  const [sugerencia, setSugerencia] = useState([]);

  useEffect(() => {
    setSugerencia([]);
    for (let m = 0; m <= monedas.length - 1; m++) {
      for (let i = transacciones.length - 1; i >= 0; i--) {
        let obj = [];
        if (transacciones[i].moneda === monedas[m].id) {
          if (transacciones[i].tipoOperacion === 1) {
            if (transacciones[i].valorActual < monedas[m].cotizacion) {
              obj = {
                operacion: "Vender",
                nombreMoneda: monedas[m].nombre,
                id: monedas[m].id,
                valor_compra: transacciones[i].valorActual,
                valor_actual: monedas[m].cotizacion,
              };
              setSugerencia((suger) => [...suger, obj]);
              break;
            } else {
              obj = {
                operacion: "Comprar",
                nombreMoneda: monedas[m].nombre,
                id: monedas[m].id,
                valor_compra: transacciones[i].valorActual,
                valor_actual: monedas[m].cotizacion,
              };
              setSugerencia((suger) => [...suger, obj]);
              break;
            }
          } else if (transacciones[i].tipoOperacion === 2) {
            if (transacciones[i].valorActual > monedas[m].cotizacion) {
              obj = {
                operacion: "Comprar",
                nombreMoneda: monedas[m].nombre,
                id: monedas[m].id,
                valor_compra: transacciones[i].valorActual,
                valor_actual: monedas[m].cotizacion,
              };
              setSugerencia((suger) => [...suger, obj]);
              break;
            } else {
              obj = {
                operacion: "Vender",
                nombreMoneda: monedas[m].nombre,
                id: monedas[m].id,
                valor_compra: transacciones[i].valorActual,
                valor_actual: monedas[m].cotizacion,
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
              <ItemListaSuger key={suger.id} {...suger} />
            ))}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default InputListaSuger;
