const Input_tipo_Trans = () => {
  return (
    <div class="row justify-content-center">
      <div class="col-md-8">
        <label id="inicio">tipo: </label>
        <select class="form-select" id="inp_trasn_tipo">
          <option value="" selected disabled>
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
