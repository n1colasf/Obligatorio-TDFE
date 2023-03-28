import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { guardarDeptos } from "../features/departamentosSlice";
import { guardarCitys } from "../features/ciudadesSlice";
//COMPONENTES
import ImagenReg from "./Registro/Imagen_Reg";
import InputUsuarioReg from "./Registro/Input_usuario_Reg";
import InputPassReg from "./Registro/Input_pass_Reg";
import InputDeptoReg from "./Registro/Input_depto_Reg";
import InputCityReg from "./Registro/Input_city_Reg";
import InputBtnReg from "./Registro/Input_btn_Reg";
import InputLinkReg from "./Registro/Input_link_Reg";

const Registro = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const urlDeptos = "https://crypto.develotion.com/departamentos.php";
    const urlCitys = "https://crypto.develotion.com/ciudades.php";

    fetch(urlDeptos, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarDeptos(data.departamentos));
      });

    fetch(urlCitys, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarCitys(data.ciudades));
      });
  });

  return (
    <div className="container">
      <div className="card shadow">
        <br />
        <ImagenReg />
        <div className="card-body">
          <InputUsuarioReg />
          <br />
          <InputPassReg />
          <br />
          <InputDeptoReg />
          <br />
          <InputCityReg />
          <br />
          <InputBtnReg />
          <InputLinkReg />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Registro;
