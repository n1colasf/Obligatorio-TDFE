import ImagenSuger from "./sugerencia.png";

const Imagen_Suger = () => {
  return (
    <>
      <img className="card-img-top margin_bot" id="img_sm" src={ImagenSuger} />
      <h3 className="col centrado">operaciones sugeridas</h3>
    </>
  );
};

export default Imagen_Suger;
