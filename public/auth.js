import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "./firebaseConfig";

// Initialize Firebase Auth
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

/**
 * Sign in with Google
 */
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log("Google user:", user);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

/**
 * Sign in with GitHub
 */
export const signInWithGitHub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const user = result.user;
    console.log("GitHub user:", user);
  } catch (error) {
    console.error("Error signing in with GitHub:", error);
  }
};

/**
 * Create a new user with Email and Password
 * @param {string} email
 * @param {string} password
 */
export const signUpWithEmail = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user with email:", error);
  }
};

/**
 * Sign in with Email and Password
 * @param {string} email
 * @param {string} password
 */
export const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    console.log("Signed in user:", user);
  } catch (error) {
    console.error("Error signing in with email:", error);
  }
};

/**
 * Sign out the user
 */
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};