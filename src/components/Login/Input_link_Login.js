import { Link } from "react-router-dom";

const InputLinkLogin = () => {
  return (
    <p id="margin_top" className="centrado">
      <small className="text-muted" id="margin_top">
        ¿No tenés una cuenta?{" "}
        <Link id="link" to="/registro">
          Conseguila acá
        </Link>
      </small>
    </p>
  );
};

export default InputLinkLogin;
