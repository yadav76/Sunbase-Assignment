const customerForm = document.getElementById("customerForm");

// Function to go back to the customer list
function backToList() {
  // Redirect to the customer list page here
}

// Function to handle the form submission
customerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Perform customer validation here
  if (
    validateCustomer(firstName, lastName, address, city, state, email, phone)
  ) {
    // Save the customer here
    alert("Customer saved!");
    backToList();
  } else {
    alert("Invalid customer data.");
  }
});

// Function to validate the customer data
function validateCustomer(
  firstName,
  lastName,
  address,
  city,
  state,
  email,
  phone
) {
  // Add validation logic here
  return true;
}
