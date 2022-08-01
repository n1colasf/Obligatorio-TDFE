import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { guardarDeptos } from "../features/departamentosSlice";

import Imagen_Reg from "./Registro/Imagen_Reg";
import Input_usuario_Reg from "./Registro/Input_usuario_Reg";
import Input_pass_Reg from "./Registro/Input_pass_Reg";
import Input_depto_Reg from "./Registro/Input_depto_Reg";
import Input_city_Reg from "./Registro/Input_city_Reg";
import Input_btn_Reg from "./Registro/Input_btn_Reg";
import Input_link_Reg from "./Registro/Input_link_Reg";

const Registro = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://crypto.develotion.com/departamentos.php`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        dispatch(guardarDeptos(data.departamentos));
      });
  }, []);

  return (
    <div className="card shadow">
      <br />
      <Imagen_Reg />
      <div className="card-body">
        <Input_usuario_Reg />
        <br />
        <Input_pass_Reg />
        <br />
        <Input_depto_Reg />
        <br />
        <Input_city_Reg />
        <br />
        <Input_btn_Reg />
        <Input_link_Reg />
      </div>
    </div>
  );
};

export default Registro;
