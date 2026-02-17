import React from "react";
import "./Button.css";

const Button = ({
  className = "",
  type = "button",
  text = "ENVIAR",
  loading = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`custom-btn ${className}`}
      type={type}
      disabled={loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? "Cargando..." : text}
    </button>
  );
};

export default Button;
