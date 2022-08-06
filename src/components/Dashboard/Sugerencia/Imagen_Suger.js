import ImgSuger from "../../../img/sugerencia.png";

const ImagenSuger = () => {
  return (
    <>
      <img className="card-img-top margin_bot" id="img_sm" src={ImgSuger} alt=""/>
      <h3 className="col centrado">operaciones sugeridas</h3>
    </>
  );
};

export default ImagenSuger;
