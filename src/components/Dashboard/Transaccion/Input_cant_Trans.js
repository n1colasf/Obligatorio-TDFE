const Input_cant_Trans = () => {
  return (
    <>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <label id="inicio">cantidad: </label>
          <input
            type="text"
            id="inp_trans_total"
            class="form-control"
            onkeyup="mostrar_total()"
          />
          <label class="text-muted" id="inp_trans_tot">
            Total:
          </label>
        </div>
      </div>
    </>
  );
};

export default Input_cant_Trans;
