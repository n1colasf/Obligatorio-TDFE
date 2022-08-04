import ImagenVend from "../../../img/venta.png";

const Imagen_Vendido = () => {
  return (
    <>
      <img className="card-img-top margin_bot" id="img_sm" src={ImagenVend} />
      <h3 className="col centrado">montos vendidos</h3>
    </>
  );
};

export default Imagen_Vendido;
