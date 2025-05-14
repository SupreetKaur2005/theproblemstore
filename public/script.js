import {
  signInWithGoogle,
  signInWithGitHub,
  signUpWithEmail,
  signInWithEmail,
  logout,
} from "./auth";

// Get DOM elements
const googleLoginButton = document.getElementById("google-login");
const githubLoginButton = document.getElementById("github-login");
const emailSignupButton = document.getElementById("email-signup");
const emailLoginButton = document.getElementById("email-login");
const logoutButton = document.getElementById("logout");

// Event Listeners
googleLoginButton.addEventListener("click", signInWithGoogle);
githubLoginButton.addEventListener("click", signInWithGitHub);

emailSignupButton.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signUpWithEmail(email, password);
});

emailLoginButton.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmail(email, password);
});

logoutButton.addEventListener("click", logout);