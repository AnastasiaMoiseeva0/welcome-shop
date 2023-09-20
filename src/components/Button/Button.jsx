import "./Button.css";

function Button({ children, className, transparentButton, onClick, type, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button
        ${className}
        ${transparentButton === "transparent" ? "button_type_transparent" : "" }
      }`}
      type={type || 'button'}
    >
      {children}
    </button>
  );
}

export default Button;