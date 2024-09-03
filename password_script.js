document.addEventListener("DOMContentLoaded", function () {
  // Отримати email з sessionStorage
  const userEmail = sessionStorage.getItem("userEmail");

  // Відобразити email на сторінці
  document.getElementById("userEmail").textContent = userEmail;
});

document.getElementById("showPassword").addEventListener("change", function () {
  const passwordInput = document.getElementById("password");
  passwordInput.type = this.checked ? "text" : "password";
});

document
  .getElementById("passwordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;

    // Тут можна додати логіку для збереження пароля чи його обробки

    console.log("Entered Password:", password);
    alert("Entered Password: " + password);
  });
