import "./Button.css";

type ButtonProps = Partial<{
  children: string | JSX.Element | JSX.Element[],
  className: string,
  transparentButton: string,
  onClick: () => void,
  type: "button" | "submit" | "reset" | undefined,
  disabled: boolean,
}>;

function Button({ children, className, transparentButton, onClick, type, disabled }: ButtonProps ) {
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