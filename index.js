var customerName = "bob";
const leastFavoriteCustomer = "Lohola";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  // Overwrite the existing global bestCustomer
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  // Attempting to reassign a const will throw an error (expected behavior)
  leastFavoriteCustomer = "rohoni";
}


