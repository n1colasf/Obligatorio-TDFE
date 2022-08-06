import ImgMonto from "../../../img/monto.png";

const ImagenMonto = () => {
  return (
    <>
      <img
        className="card-img-top margin_bot"
        id="img_sm"
        src={ImgMonto}
        alt=""
      />
      <h3 className="col centrado">monto invertido</h3>
    </>
  );
};

export default ImagenMonto;
