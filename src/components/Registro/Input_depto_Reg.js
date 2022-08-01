import { useSelector } from "react-redux";

const Input_depto_Reg = () => {
  const departamentos = useSelector(
    (state) => state.departamentos.departamentos
  );

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">departamento: </label>
        <select
          className="form-select"
          id="inp_reg_depto"
          defaultValue="default"
        >
          <option value="default">seleccione departamento</option>
          {departamentos.forEach((depto) => {
            <option value={depto.id}>{depto.nombre}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Input_depto_Reg;
