import Imagen_Reg from "./Registro/Imagen_Reg";
import Input_usuario_Reg from "./Registro/Input_usuario_Reg";
import Input_pass_Reg from "./Registro/Input_pass_Reg";
import Input_depto_Reg from "./Registro/Input_depto_Reg";
import Input_city_Reg from "./Registro/Input_city_Reg";
import Input_btn_Reg from "./Registro/Input_btn_Reg";
import Input_link_Reg from "./Registro/Input_link_Reg";

const Registro = () => {
  return (
    <div className="card shadow">
      <br />
      <Imagen_Reg />
      <div className="card-body">
        <Input_usuario_Reg />
        <Input_pass_Reg />
        <Input_depto_Reg />
        <Input_city_Reg />
        <Input_btn_Reg />
        <Input_link_Reg />
      </div>
    </div>
  );
};

export default Registro;
