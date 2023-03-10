// create an array of checkbox values
var checkboxValues = ["Option 1", "Option 2", "Option 3"];

// function to add a new checkbox
function addCheckbox() {
  // create a new checkbox element
  var checkbox = document.createElement('input');

  // set the type of the checkbox to "checkbox"
  checkbox.type = "checkbox";

  // set the ID of the checkbox to a unique value
  checkbox.id = "checkbox" + document.querySelectorAll('input[type="checkbox"]').length;

  // create a label element
  var label = document.createElement('label');

  // set the "for" attribute of the label to match the ID of the checkbox
  label.setAttribute('for', checkbox.id);

  // create a button element to delete the checkbox
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener('click', function() {
    checkbox.parentNode.removeChild(checkbox);
    label.parentNode.removeChild(label);
    deleteButton.parentNode.removeChild(deleteButton);
  });

  // add the checkbox, label, and delete button elements to the DOM
  document.body.appendChild(checkbox);
  document.body.appendChild(label);
  document.body.appendChild(deleteButton);
}

// loop through the array and create a checkbox for each value
for (var i = 0; i < checkboxValues.length; i++) {
  addCheckbox();

  // set the value of the checkbox to the current array element
  document.querySelectorAll('input[type="checkbox"]')[i].value = checkboxValues[i];

  // set the text content of the label to the current array element
  document.querySelectorAll('label')[i].appendChild(document.createTextNode(checkboxValues[i]));
}

// add a button to add a new checkbox
var addButton = document.createElement('button');
addButton.innerHTML = "Add Checkbox";
addButton.addEventListener('click', addCheckbox);
document.body.appendChild(addButton);