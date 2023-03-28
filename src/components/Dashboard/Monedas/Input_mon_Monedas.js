import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoneda } from "../../../features/monedasSlice";

const InputMonMonedas = () => {
  const monedas = useSelector((state) => state.monedas.monedas);
  const transacciones = useSelector(
    (store) => store.usuarioLogin.transacciones
  );

  const monedasUnicas = new Map(
    transacciones
      .filter((trans) => trans.moneda != 0)
      .map((item) => [item.moneda, item])
  ).values();
  const monedasUnicasArray = [...new Set(monedasUnicas)];

  const arrayMonedasUser = [];
  monedas.forEach((moneda) => {
    monedasUnicasArray.forEach((trans) => {
      if (moneda.id === trans.moneda) {
        arrayMonedasUser.push(moneda);
      }
    });
  });

  const input_usuario = useRef(null);
  const dispatch = useDispatch();

  function capturarValor() {
    let valorIdMoneda = input_usuario.current.value;
    dispatch(selectMoneda(valorIdMoneda));
  }

  return (
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <label id="inicio">
            moneda:
            <select
              className="form-select"
              id="inp_mon_monedas"
              ref={input_usuario}
              defaultValue="default"
              onChange={capturarValor}
            >
              <option value="default" disabled>
                seleccione moneda
              </option>
              {arrayMonedasUser.map((moneda) => (
                <option key={moneda.id} value={moneda.id}>
                  {moneda.nombre}
                </option>
              ))}
            </select>
          </label>
          <div className="row">
            <label className="text-muted" id="inp_grafico_monedas" />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default InputMonMonedas;
