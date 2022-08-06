import { Link } from "react-router-dom";

const InputLinkReg = () => {
  return (
    <p id="margin_top" className="centrado">
      <small className="text-muted" id="margin_top">
        ¿Ya tenés una cuenta?{" "}
        <Link to="/" id="link">
          Inicia sesión
        </Link>
      </small>
    </p>
  );
};

export default InputLinkReg;
