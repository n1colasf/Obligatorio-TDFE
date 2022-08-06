import ImgVend from "../../../img/venta.png";

const ImagenVendido = () => {
  return (
    <>
      <img className="card-img-top margin_bot" id="img_sm" src={ImgVend} alt=""/>
      <h3 className="col centrado">montos vendidos</h3>
    </>
  );
};

export default ImagenVendido;
