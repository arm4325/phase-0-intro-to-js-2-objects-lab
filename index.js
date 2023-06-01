// Write your solution in this file!
const employee = {
  name: "John Doe",
  streetAddress: "123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  return {
    ...employee,
    [key]: undefined
  };
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Update the employee's name
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
console.log(updatedEmployee); // { name: 'Jane Doe', streetAddress: '123 Main Street' }

// Update the employee's street address
const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm Street");
console.log(destructivelyUpdatedEmployee); // { name: 'John Doe', streetAddress: '456 Elm Street' }

// Delete the employee's name
const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
console.log(employeeWithoutName); // { streetAddress: '123 Main Street' }

// Delete the employee's street address
const employeeWithoutStreetAddress = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log(employeeWithoutStreetAddress); // { name: 'John Doe' }
