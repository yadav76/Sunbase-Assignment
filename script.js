const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("hiii");

  const loginId = document.getElementById("loginId").value;
  const password = document.getElementById("password").value;

  // Perform login validation here
  if (loginId === "" || password === "") {
    alert("Invalid login credentials.");
  } else {
    alert("Login successful!");
    // Redirect to a new page or perform other actions here
    window.location.href = "./addCustomer/index.html";
  }
});

const redirect = () => {
  // event.preventDefault();

  console.log("hiii");

  const loginId = document.getElementById("loginId").value;
  const password = document.getElementById("password").value;

  // Perform login validation here
  if (loginId === "" || password === "") {
    alert("Login successful!");
    // Redirect to a new page or perform other actions here
  } else {
    alert("Invalid login credentials.");
  }

  window.location.href = "./addCustomer/index.html";
};
