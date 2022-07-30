import Imagen_Login from "./Login/Imagen_Login";
import Input_usuario_Login from "./Login/Input_usuario_Login";
import Input_pass_Login from "./Login/Input_pass_Login";
import Input_btn_Login from "./Login/Input_btn_Login";
import Input_link_Login from "./Login/Input_link_Login";

const Login = () => {
  return (
    <div className="card shadow">
      <Imagen_Login />
      <div className="card-body">
        <Input_usuario_Login />
        <br />
        <Input_pass_Login />
        <Input_btn_Login />
        <Input_link_Login />
      </div>
    </div>
  );
};

export default Login;
