document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    sessionStorage.setItem("userEmail", email);
    window.location.href = "password_page.html";
  });
