const signinbtn = document.getElementById("signinbtn");
const signupbtn = document.getElementById("signupbtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");
signinbtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupbtn.classList.add("disabled");
  signinbtn.classList.remove("disabled");
};
signupbtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign up";
  signupbtn.classList.remove("disabled");
  signinbtn.classList.add("disabled");
};
