const Input_btn_Monto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col centrado">
        <input
          className="btn azul"
          type="button"
          id="btn_tot_inv"
          //onClick={transacciones_usuario()}
          value="calcular total"
        />
      </div>
    </div>
  );
};

export default Input_btn_Monto;
