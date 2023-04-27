import SignUpForm from "../component/sign-up/Sign-up";
import SignInForm from "../component/sign-in/sign-in-form";
import { SignInComponentContainer } from "./sign-in-component-container.styles.jsx";

const SignInComponent = () => {
  // initializing fuctionality of the sign in with Google onclick
  return (
    <SignInComponentContainer>
      <SignInForm />
      <SignUpForm />
    </SignInComponentContainer>
  );
};

export default SignInComponent;
