import ImgMoneda from "../../../img/moneda.png";

const ImagenMonedas = () => {
  return (
    <>
      <img className="card-img-top margin_bot" id="img_sm" src={ImgMoneda} alt=""/>
      <h3 className="col centrado">gráfico por moneda</h3>
    </>
  );
};

export default ImagenMonedas;
