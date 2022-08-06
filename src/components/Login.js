//COMPONENTES
import ImagenLogin from "./Login/Imagen_Login";
import InputUsuarioLogin from "./Login/Input_usuario_Login";
import InputPassLogin from "./Login/Input_pass_Login";
import InputBtnLogin from "./Login/Input_btn_Login";
import InputLinkLogin from "./Login/Input_link_Login";

const Login = () => {
  return (
    <div className="container">
      <div className="card shadow">
        <ImagenLogin />
        <div className="card-body">
          <InputUsuarioLogin />
          <br />
          <InputPassLogin />
          <InputBtnLogin />
          <InputLinkLogin />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Login;
