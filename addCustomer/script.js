const searchInput = document.getElementById("searchInput");
const customerTable = document.getElementById("customerTable");

// Sample data
const customers = [
  {
    id: 0,
    firstName: "Sakshi",
    lastName: "Sharma",
    address: "Hno 1",
    city: "Delhi",
    state: "Delhi",
    email: "sam@gmail.com",
    phone: "10258",
  },
  // Add more customers here
];

// Function to add a customer to the table
function addCustomer() {
  // Display a form for adding a customer here
}

// Function to edit a customer
function editCustomer(id) {
  // Display a form for editing a customer here
  window.location.href = "../customerDetails/index.html";
}

// Function to filter the customer table by name
function filterTable() {
  const searchTerm = searchInput.value.toLowerCase();
  const rows = customerTable
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const name =
      cells[0].textContent.toLowerCase() +
      " " +
      cells[1].textContent.toLowerCase();

    if (name.indexOf(searchTerm) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

// Call the filterTable function when the search input changes
searchInput.addEventListener("input", filterTable);
