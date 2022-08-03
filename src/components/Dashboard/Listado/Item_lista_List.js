import { useSelector } from "react-redux";

const Item_lista_List = ({
  tipo_operacion,
  moneda,
  cantidad,
  valor_actual,
}) => {
  const monedas = useSelector((store) => store.monedas.monedas);
  let operacion = "";
  let nombreMoneda = "";

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

  return (
    <>
      <tr>
        <td>{operacion}</td>
        <td>{nombreMoneda}</td>
        <td>{cantidad.toLocaleString("en-US")}</td>
        <td>$ {valor_actual.toLocaleString("en-US")}</td>
        <td>$ {(cantidad * valor_actual).toLocaleString("en-US")}</td>
      </tr>
    </>
  );
};

export default Item_lista_List;
