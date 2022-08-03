import Grafica_Monedas from "./Monedas/Grafica_Monedas";
import Imagen_Monedas from "./Monedas/Imagen_Monedas";
import Input_mon_Monedas from "./Monedas/Input_mon_Monedas";

const GraficoMonedas = () => {
  return (
    <>
      <Imagen_Monedas />
      <Input_mon_Monedas />
      <Grafica_Monedas />
      <br/>
    </>
  );
};

export default GraficoMonedas;
