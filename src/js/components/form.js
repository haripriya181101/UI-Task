document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".subscribe__form");
  const emailInput = document.getElementById("emailInput");
  const checkbox = document.getElementById("privacyCheckbox");
  const emailError = document.getElementById("emailError");
  const checkboxError = document.getElementById("checkboxError");

  form.addEventListener("submit", function (event) {
    let valid = true;

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue || !emailRegex.test(emailValue)) {
      emailError.style.display = "block";
      valid = false;
    } else {
      emailError.style.display = "none";
    }

    if (!checkbox.checked) {
      checkboxError.style.display = "block";
      valid = false;
    } else {
      checkboxError.style.display = "none";
    }

    if (!valid) {
      event.preventDefault();
    } else {
      event.preventDefault();

      emailInput.value = "";
      checkbox.checked = false;

      alert("¡Gracias por suscribirte!");
    }
  });
});
