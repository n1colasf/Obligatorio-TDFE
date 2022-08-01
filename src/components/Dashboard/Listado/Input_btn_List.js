const Input_btn_List = () => {
  return (
    <div className="row justify-content-center">
      <div className="col centrado">
        <input
          className="btn azul"
          type="button"
          id="btn_lista_trans"
          //onClick={crear_listado_transacciones()}
          value="listar"
        />
      </div>
    </div>
  );
};

export default Input_btn_List;
