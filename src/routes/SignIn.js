import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserWithGoogleAuth,
} from "./../utils/firebase/firebase";
import SignUpForm from "../component/sign-up/Sign-up";

const SignIn = () => {
  // initializing fuctionality of the sign in with Google onclick

  const userLog = async () => {
    const { user } = await signInWithGooglePopup();
    const docRef = await createUserWithGoogleAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={userLog}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
