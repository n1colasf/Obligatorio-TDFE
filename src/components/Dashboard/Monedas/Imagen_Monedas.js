import ImagenMoneda from "../../../img/moneda.png";

const Imagen_Monedas = () => {
  return (
    <>
      <img className="card-img-top margin_bot" id="img_sm" src={ImagenMoneda} />
      <h3 className="col centrado">gráfico por moneda</h3>
    </>
  );
};

export default Imagen_Monedas;
