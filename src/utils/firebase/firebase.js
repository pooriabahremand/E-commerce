// This code is setting up a Firebase application with the given configuration. It is importing the necessary functions from the Firebase library to initialize the app, authenticate users, and access the Firestore database. It is also setting up a Google authentication provider and exporting the authentication and database functions for use in other parts of the application. Finally, it is creating a user in the Firestore database if one does not already exist.
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWZUv2AM1ht6RnVw-Y6sCsGOEahP4I3p8",
  authDomain: "e-commerce-clown.firebaseapp.com",
  projectId: "e-commerce-clown",
  storageBucket: "e-commerce-clown.appspot.com",
  messagingSenderId: "251648116068",
  appId: "1:251648116068:web:22235b1dffa968f54ca671",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserWithGoogleAuth = async (userAuth) => {
  const docRef = doc(db, "users", userAuth.uid);

  // console.log(docRef);

  const snapShot = await getDoc(docRef);
  // console.log(snapShot.exists());

  const { displayName, email } = userAuth;
  const createdAt = new Date();

  if (!snapShot.exists()) {
    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } else {
    return docRef;
  }
};
