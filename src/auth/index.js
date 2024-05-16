// Import the auth instance directly from firebaseConfig
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Function to sign up a new user
const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Function to sign in an existing user
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Function to sign out the current user
const signOutUser = () => {
  return signOut(auth);
};

// Function to monitor authentication state changes
const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { signUp, signIn, signOutUser, onAuthStateChange };
