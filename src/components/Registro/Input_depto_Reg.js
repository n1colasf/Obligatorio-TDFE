const input_depto_Reg = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">departamento: </label>
        <select className="form-select" id="inp_reg_depto">
          <option defaultValue disabled>
            Seleccione departamento
          </option>
        </select>
      </div>
    </div>
  );
};

export default input_depto_Reg;
