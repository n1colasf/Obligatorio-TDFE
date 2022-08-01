const Input_cant_Trans = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <label id="inicio">cantidad: </label>
          <input
            type="text"
            id="inp_trans_total"
            className="form-control"
            //onKeyUp={mostrar_total()}
          />
          <label className="text-muted" id="inp_trans_tot">
            Total:
          </label>
        </div>
      </div>
    </>
  );
};

export default Input_cant_Trans;
