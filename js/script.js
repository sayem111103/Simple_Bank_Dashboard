document.getElementById("submit_btn").addEventListener("click", function () {
  let emailField = document.getElementById("mail");
  let mail = emailField.value;
  let passField = document.getElementById("pass");
  let pass = passField.value;
  if (mail === "sayem@gmail.com" && pass === "sayem") {
    window.location.href = "dashboard.html";
  } else {
    alert("invalid user");
  }
});
