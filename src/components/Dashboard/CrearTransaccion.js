import ImagenTrans from "./Transaccion/Imagen_Trans";
import InputBtnTrans from "./Transaccion/Input_btn_Trans";
import InputCantTrans from "./Transaccion/Input_cant_Trans";
import InputMonedaTrans from "./Transaccion/Input_moneda_Trans";
import InputTipoTrans from "./Transaccion/Input_tipo_Trans";

const CrearTransaccion = () => {
  return (
    <>
      <ImagenTrans />
      <div className="card-body">
        <InputTipoTrans />
        <br />
        <InputMonedaTrans />
        <br />
        <InputCantTrans />
        <br />
        <InputBtnTrans />
        <br />
      </div>
    </>
  );
};

export default CrearTransaccion;
