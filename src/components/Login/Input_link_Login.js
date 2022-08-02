import { Link } from "react-router-dom";

const Input_link_Login = () => {
  return (
    <p id="margin_top" className="centrado">
      <small className="text-muted" id="margin_top">
        ¿No tenés una cuenta?
        <a id="link" href="/registro">
          Conseguila acá
        </a>
      </small>
    </p>
  );
};

export default Input_link_Login;
