import Imagen_Transaccion from "./Transaccion/Imagen_Transaccion";
import Input_btn_Trans from "./Transaccion/Input_btn_Trans";
import Input_cant_Trans from "./Transaccion/Input_cant_Trans";
import Input_moneda_Trans from "./Transaccion/Input_moneda_Trans";
import Input_tipo_Trans from "./Transaccion/Input_tipo_Trans";

const CrearTransaccion = () => {
  return (
    <>
      <Imagen_Transaccion />
      <div className="card-body">
        <Input_tipo_Trans />
        <br />
        <Input_moneda_Trans />
        <br />
        <Input_cant_Trans />
        <br />
        <Input_btn_Trans />
        <br />
      </div>
    </>
  );
};

export default CrearTransaccion;
