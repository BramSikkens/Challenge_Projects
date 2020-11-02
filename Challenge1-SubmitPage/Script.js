window.onload = (e) => {
  var signupSection = document.getElementById("SignUpSection");
  var signInSection = document.getElementById("SignInSection");

  var signUpButton = document.getElementById("SignupbuttonSection");
  var signInButton = document.getElementById("SignInButtonSection");

  var testLabel = document.getElementById("testLabel");

  signUpButton.addEventListener("click", () => {
    signInButton.classList.remove("active");
    signUpButton.classList.add("active");
    signInSection.style.display = "none";
    signupSection.style.display = "block";
  });
  signInButton.addEventListener("click", () => {
    signUpButton.classList.remove("active");
    signInButton.classList.add("active");
    signupSection.style.display = "none";
    signInSection.style.display = "block";
  });


};
