const ItemListaSuger = ({
  operacion,
  nombreMoneda,
  valor_compra,
  valor_actual,
}) => {
  return (
    <>
      <li className="list-group-item text-center">
        <strong>Moneda: </strong> {nombreMoneda} <strong>Comprado: </strong> ${" "}
        {valor_compra} <strong>Actual: </strong>$ {valor_actual}
        <br />
        <strong>Sugerencia: </strong> {operacion}
      </li>
    </>
  );
};

export default ItemListaSuger;
