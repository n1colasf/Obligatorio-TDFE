import { useSelector } from "react-redux";
import Item_lista_List from "./Item_lista_List";

const Input_lista_List = () => {
  const transacciones = useSelector(
    (state) => state.usuarioLogin.transacciones
  );

  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Operacion</th>
              <th scope="col">Moneda</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Cotización</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {transacciones.map((trans) => (
              <Item_lista_List key={trans.id} {...trans} />
            ))}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  );
};

export default Input_lista_List;
