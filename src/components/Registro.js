import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { guardarDeptos } from "../features/departamentosSlice";
import { guardarCitys } from "../features/ciudadesSlice";
//COMPONENTES
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
    const urlDeptos = `https://crypto.develotion.com/departamentos.php`;
    const urlCitys = `https://crypto.develotion.com/ciudades.php`;

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
    //bug: los [] del useffect se sacan por la navegacion?
  }, []);

  return (
    <div className="container">
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
      <br />
      <br />
      <br />
    </div>
  );
};

export default Registro;
