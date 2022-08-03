import Imagen_Trans from "./Transaccion/Imagen_Trans";
import Input_btn_Trans from "./Transaccion/Input_btn_Trans";
import Input_cant_Trans from "./Transaccion/Input_cant_Trans";
import Input_moneda_Trans from "./Transaccion/Input_moneda_Trans";
import Input_tipo_Trans from "./Transaccion/Input_tipo_Trans";

const CrearTransaccion = () => {
  return (
    <>
      <Imagen_Trans />
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
