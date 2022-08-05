const Item_lista_Suger = ({ operacion, nombreMoneda }) => {
  return (
    <>
      <li className="list-group-item text-center">
        <strong>Moneda: </strong> {nombreMoneda}
        <br />
        <strong>Sugerencia: </strong> {operacion}
      </li>
    </>
  );
};

export default Item_lista_Suger;
