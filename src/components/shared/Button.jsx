const Button = ({ children, type, isDisabled, btnBg }) => {
  return (
    <button className={`btn btn-${btnBg}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  btnBg: "primary",
  isDisabled: false,
  type: "button",
};
export default Button;
