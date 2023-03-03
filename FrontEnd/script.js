// -------------------------- Variables -------------------------- 
let numCheckbox = 0;                                           // Var for the number o checkbox checked
const addBtn= document.querySelector(".add");                  // Const
const addBtnSave= document.querySelector(".save");             //
 
const input = document.querySelector(".inp-group");            //

var barra_bruno = document.querySelector(".progress-bar-fill");  

var root = document.querySelector(':root');                    //
var rootStyle = getComputedStyle(root);                        //
var xpBarVar = rootStyle.getPropertyValue('--xpBarVar--');        //

var xp = 0;                                                    // Var representing the xp points of the character

var xpString = toString(xp);


// -------------------------- Fuctions --------------------------
function removeInput(){
    numCheckbox -= 1 ;
    this.parentElement.remove();
}

function addInput(){
    numCheckbox += 1 ; //Se colocar += ele altera o numero do xp la embaixo no calculo do saveXp
    const habit = document.createElement("input");
    habit.type = "text";
    habit.placeholder = "Enter your habit";

    const checkbx = document.createElement("checkbox");
    checkbx.setAttribute("type", "checkbox");
    
    const btn= document.createElement("a");
    btn.className= "delete";
    btn.innerHTML= "&times";


    btn.addEventListener("click", removeInput)

    const flex= document.createElement("div");
    flex.className= "flex";

    input.appendChild(flex);
    flex.appendChild(checkbx)
    flex.appendChild(habit);
    flex.appendChild(btn);
    

}

function saveXp(){
    xp = 10*numCheckbox; 
    barra_bruno.style.width = xp+'%';
}




// -------------------------- EventListeners -------------------------- 
addBtn.addEventListener("click", addInput);
addBtnSave.addEventListener("click", saveXp);