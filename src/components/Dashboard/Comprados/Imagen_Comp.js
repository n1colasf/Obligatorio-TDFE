import ImgComp from "../../../img/compra.png";

const ImagenComp = () => {
  return (
    <>
      <img className="card-img-top margin_bot" id="img_sm" src={ImgComp} alt="" />
      <h3 className="col centrado">montos comprados</h3>
    </>
  );
};

export default ImagenComp;
