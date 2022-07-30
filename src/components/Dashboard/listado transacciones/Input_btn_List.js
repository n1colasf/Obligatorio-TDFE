const Input_btn_List = () => {
  return (
    <div class="row justify-content-center">
      <div class="col centrado">
        <input
          class="btn azul"
          type="button"
          id="btn_lista_trans"
          onclick="crear_listado_transacciones()"
          value="listar"
        />
      </div>
    </div>
  );
};

export default Input_btn_List;
