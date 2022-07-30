import Imagen_Transaccion from "./crear transaccion/Imagen_Transaccion";
import Input_btn_Trans from "./crear transaccion/Input_btn_Trans";
import Input_cant_Trans from "./crear transaccion/Input_cant_Trans";
import Input_moneda_Trans from "./crear transaccion/Input_moneda_Trans";
import Input_tipo_Trans from "./crear transaccion/Input_tipo_Trans";

const CrearTransaccion = () => {
  return (
    <>
      <Imagen_Transaccion />
      <Input_tipo_Trans />
      <br />
      <Input_moneda_Trans />
      <br />
      <Input_cant_Trans />
      <br />
      <Input_btn_Trans />
    </>
  );
};

export default CrearTransaccion;
