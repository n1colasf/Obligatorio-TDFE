import { useSelector } from "react-redux";
import ItemListaList from "./Item_lista_List";

const InputListaList = () => {
  const transacciones = useSelector(
    (state) => state.usuarioLogin.transacciones
  );

  return (
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Operación</th>
                <th scope="col">Moneda</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Cotización</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {transacciones.map((transaccion) => (
                <ItemListaList key={transaccion.id} {...transaccion} />
              ))}
            </tbody>
          </table>
          <br />
        </div>
      </div>
    </div>
  );
};

export default InputListaList;
