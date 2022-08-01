const Input_moneda_Trans = () => {
  return (
    <div class="row justify-content-center">
      <div class="col-md-8">
        <label id="inicio">moneda: </label>
        <select
          class="form-select"
          id="inp_trans_moneda"
          onchange="mostrtar_monto()"
        >
          <option selected disabled>
            seleccione moneda
          </option>
        </select>
        <div class="row">
          <label class="text-muted" id="inp_trans_valor">
            Valor:
          </label>
        </div>
      </div>
    </div>
  );
};

export default Input_moneda_Trans;
