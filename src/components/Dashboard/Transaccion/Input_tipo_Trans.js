const Input_tipo_Trans = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">tipo: </label>
        <select
          className="form-select"
          id="inp_trasn_tipo"
          defaultValue="default"
        >
          <option value="default" disabled>
            seleccione operación
          </option>
          ;<option value="1">Comprar</option>
          <option value="2">Vender</option>
        </select>
      </div>
    </div>
  );
};

export default Input_tipo_Trans;
