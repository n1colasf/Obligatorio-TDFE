import { useSelector } from "react-redux";
import Item_lista_Suger from "./Item_lista_Suger";

//bug: FALTA HACER!!!!
const Input_lista_Suger = () => {
  const transacciones = useSelector(
    (store) => store.usuarioLogin.transacciones
  );

  let id = 1;

  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="list-group">
          {transacciones
            .filter((trans) => trans.moneda == id)
            .map((trans) => (
              <Item_lista_Suger key={trans.id} {...trans} />
            ))}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Input_lista_Suger;
