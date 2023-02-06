import { useSelector } from "react-redux";

const ItemListaList = ({ tipoOperacion, moneda, cantidad, valorActual }) => {
  const monedas = useSelector((store) => store.monedas.monedas);
  let operacion = "";
  let nombreMoneda = "";

  if (tipoOperacion === 1) {
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
        <td>{cantidad}</td>
        <td>{valorActual}</td>
        <td>$ {cantidad * valorActual}</td>
      </tr>
    </>
  );
};

export default ItemListaList;
