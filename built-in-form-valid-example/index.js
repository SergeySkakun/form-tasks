const form = document.querySelector(".js-validation-form2");
const email = document.querySelector("#js-validation-form2__email");
const emailError = document.querySelector(".js-validation-form2__error");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Value is missing!";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Value is not email!";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters, you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
}
