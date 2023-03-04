import FormInput from "./Form-Input";
import { useState } from "react";
import { createUserWithEmailPassword } from "../../utils/firebase/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetInputs = () => {
    setFormFields(defaultFormFields);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailPassword(email, password, displayName);
      resetInputs();
    } else {
      console.log(
        "please check the equality of the password and confirm password box"
      );
    }
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <h1>Sign up with your email and password</h1>

        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
