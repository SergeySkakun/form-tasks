const email = document.getElementById("new-email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("");
  }
});
