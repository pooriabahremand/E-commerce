import { useState } from "react";
import FormInput from "../sign-up/Form-Input";
import Button from "../sign-up/button";
import {
  signInWithGooglePopup,
  createUserWithGoogleAuth,
} from "./../../utils/firebase/firebase";
import { signInUserWithEmailAndPassword } from "./../../utils/firebase/firebase";

import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const userLog = async () => {
    const { user } = await signInWithGooglePopup();
    const docRef = await createUserWithGoogleAuth(user);
  };

  const resetInputs = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      
      resetInputs();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password for this email");
          break;
        case "auth/user-not-found":
          alert("There is no user with this email");
          break;
        case "auth/network-request-failed":
          alert("Please check the internet connection");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={formSubmitHandler}>
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
        {/* <button onClick={userLog}>Sign in with Google</button> */}
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button buttonType="google" onClick={userLog} type="button">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
