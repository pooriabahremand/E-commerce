import "./button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverter: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  //   console.log(this.props);
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
