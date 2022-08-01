const Input_btn_Monto = () => {
  return (
    <div class="row justify-content-center">
      <div class="col centrado">
        <input
          class="btn azul"
          type="button"
          id="btn_tot_inv"
          onclick="transacciones_usuario()"
          value="calcular total"
        />
      </div>
    </div>
  );
};

export default Input_btn_Monto;
