import { useSelector } from "react-redux";
import Item_lista_Suger from "./Item_lista_Suger";

const Input_lista_Suger = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="list-group">
          <Item_lista_Suger />
          <Item_lista_Suger />
          <Item_lista_Suger />
          <Item_lista_Suger />
          <Item_lista_Suger />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Input_lista_Suger;
