import { useSelector } from "react-redux";

const Item_lista_Suger = ({ valor_actual, moneda }) => {
  const monedas = useSelector((store) => store.monedas.monedas);

  let operacion = "";
  let nombreMoneda = "";

  monedas.forEach((moneda) => {
    if (moneda.cotizacion > valor_actual) {
      operacion = "Comprar";
    } else {
      operacion = "Vender";
    }
  });

  monedas.forEach((mon) => {
    if (moneda === mon.id) {
      nombreMoneda = mon.nombre;
    }
  });

  return (
    <>
      <li className="list-group-item text-center">
        <strong>Moneda: </strong> {nombreMoneda}
        <br />
        <strong>Operacion: </strong> {operacion}
      </li>
    </>
  );
};

export default Item_lista_Suger;

/* 
const Item_lista_Suger = ({
nombreMoneda, operacion

}) => {



  if (tipo_operacion == 1) {
    operacion = "Compra";
  } else {
    operacion = "Venta";
  }
  monedas.forEach((mon) => {
    if (moneda === mon.id) {
      nombreMoneda = mon.nombre;
    }
  });


*/
