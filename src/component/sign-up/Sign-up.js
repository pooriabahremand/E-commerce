import FormInput from "./Form-Input";
import { useState } from "react";
import {
  createUserWithEmailPassword,
  createUserWithGoogleAuth,
} from "../../utils/firebase/firebase";
import Button from "./button";
import "./Sign-up.scss";
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

  const formHandler = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const { user } = await createUserWithEmailPassword(email, password);
      await createUserWithGoogleAuth(user, { displayName });
      console.log(user);
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
    <div className="sign-up-container">
      <form onSubmit={formHandler}>
        <h2>Don't have an acoount?</h2>
        <span>Sign up with your email and password</span>

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
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
