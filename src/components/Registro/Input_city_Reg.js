const Input_city_Reg = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">ciudad: </label>
        <select
          className="form-select"
          id="inp_reg_ciudad"
          defaultValue="default"
        >
          <option value="default" disabled>
            Seleccione ciudad
          </option>
        </select>
      </div>
    </div>
  );
};

export default Input_city_Reg;
