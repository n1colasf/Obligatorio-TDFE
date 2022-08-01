const Input_moneda_Trans = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <label id="inicio">moneda: </label>
        <select
          className="form-select"
          id="inp_trans_moneda"
          defaultValue="default"
          //onChange="mostrtar_monto()"
        >
          <option value="default" disabled>
            seleccione moneda
          </option>
        </select>
        <div className="row">
          <label className="text-muted" id="inp_trans_valor">
            Valor:
          </label>
        </div>
      </div>
    </div>
  );
};

export default Input_moneda_Trans;
