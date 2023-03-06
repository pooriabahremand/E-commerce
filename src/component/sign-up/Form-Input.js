import "./Form-input.scss";
const FormInput = ({ label, ...otherProps }) => {
  // console.log(otherProps.value);
  return (
    <div className="group">
      <input className="form-input" onChange={onchange} {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
