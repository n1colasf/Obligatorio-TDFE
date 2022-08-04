import { useSelector } from "react-redux";

const Item_lista_Suger = ({}) => {
  const monedas = useSelector((store) => store.monedas.monedas);
  const operacion = "Vender";
  const nombreMoneda = "Bitcoin";
  const cantidad = 100;
  const valor_actual = 1250;
  const total = cantidad * valor_actual;

  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action text-center"
      >
        <strong>Operacion: </strong> {operacion}
        {"  "}
        <strong>Moneda: </strong> {nombreMoneda} {"  "}
        <strong>Cantidad: </strong> {cantidad.toLocaleString("en-US")} <br />
        <strong>Valor actual: </strong> $ {valor_actual.toLocaleString("en-US")}
        {"  "}
        <strong>Total: </strong> $ {total.toLocaleString("en-US")}
      </a>
    </>
  );
};

export default Item_lista_Suger;

/* 
const Item_lista_Suger = ({
  tipo_operacion,
  moneda,
  cantidad,
  valor_actual,
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
