import SignUpForm from "../component/sign-up/Sign-up";
import SignInForm from "../component/sign-in/sign-in-form";
import "./sign-in-component-container.scss";

const SignInComponent = () => {
  // initializing fuctionality of the sign in with Google onclick
  return (
    <div className="sign-in-component-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignInComponent;
