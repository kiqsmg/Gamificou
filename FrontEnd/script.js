/*_____________
|           |
|    _______|
|   |
|   |_______
|
|_______    |     |
|           |
|___________|



// -------------------------- Variables -------------------------- 
let numCheckbox = 0;                                             // Var for the number o checkbox checked
const addBtn= document.querySelector(".add");                    // Const add button 
const addBtnSave= document.querySelector(".save");               // const save button
 
const input = document.querySelector(".inp-group");              // const habit input

var barra_bruno = document.querySelector(".progress-bar-fill");  // var bar

var root = document.querySelector(':root');                      // style of bar
var rootStyle = getComputedStyle(root);                          // style of bar
var xpBarVar = rootStyle.getPropertyValue('--xpBarVar--');       // style of bar, green level changes with css varible

var xp = 0;                                                      // Var representing the xp points of the character


// -------------------------- Fuctions --------------------------

// function to delete whole habit line 
function removeInput(){
    numCheckbox -= 1 ;
    this.parentElement.remove();
}

// function to add whole habit line
function addInput(){
    numCheckbox += 1 ;

    // creating text field
    const habit = document.createElement("input"); 
    habit.type = "text";
    habit.placeholder = "Enter your habit";

    // creating check box
    const checkbx = document.createElement("input");
    checkbx.setAttribute("type", "checkbox");
    
    // creating delete button
    const btn= document.createElement("a");
    btn.className= "delete";
    btn.innerHTML= "&times";

    // delete button event listener
    btn.addEventListener("click", removeInput)

    // creating div 
    const flex= document.createElement("div");
    flex.className= "flex";

    // linking every element to the html file
    input.appendChild(flex);
    flex.appendChild(checkbx)
    flex.appendChild(habit);
    flex.appendChild(btn);
}

// saving xp 
function saveXp(){
    xp = 10*numCheckbox; 
    barra_bruno.style.width = xp+'%';
}

// -------------------------- EventListeners -------------------------- 

//
addBtn.addEventListener("click", addInput);
addBtnSave.addEventListener("click", saveXp);
*/

let itemsContainer = document.getElementById('items-container');
        let counter = 1;

        function addItem() {
            let itemDiv = document.createElement('div');

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `checkbox-${counter}`;

            let label = document.createElement('label');
            label.for = `checkbox-${counter}`;
            label.innerHTML = `Item ${counter}: `;

            let input = document.createElement('input');
            input.type = 'text';
            input.id = `text-${counter}`;

            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Delete';
            deleteButton.onclick = () => {
                itemDiv.remove();
                document.getElementById(`checkbox-${counter}`).checked = false;
            };

            itemDiv.appendChild(checkbox);
            itemDiv.appendChild(label);
            itemDiv.appendChild(input);
            itemDiv.appendChild(deleteButton);

            itemsContainer.appendChild(itemDiv);

            counter++;
            
            // Add an event listener to the checkbox to check if it is checked
            checkbox.addEventListener('change', function() {
            if (this.checked) {
                alert(' is checked' + checkbox.id);
            } else {
                alert(' is not checked' + checkbox.id);
            }
            });

        }

  