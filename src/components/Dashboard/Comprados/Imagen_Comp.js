import ImagenComp from "./compra.png";

const Imagen_Comp = () => {
  return (
    <>
      <img className="card-img-top margin_bot" id="img_sm" src={ImagenComp} />
      <h3 className="col centrado">montos comprados</h3>
    </>
  );
};

export default Imagen_Comp;
