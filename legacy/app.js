let body = document.querySelector("body");
let sidebar = document.querySelector("#sidebar");
let  header = document.querySelector("#top");
let middle = document.querySelector("#middle");
let footer = document.querySelector("#foot");
let inputs = document.querySelectorAll(".radio1");

//document vars

let size = prompt("size of grid? ")
//a function that transforms the "middle" into a grid of boxes depending on size
function makeBoxes(size) {
    let repeatString = "repeat(" + size + ", 1fr)"
    console.log(repeatString);
    middle.style.gridTemplateColumns = repeatString;
    middle.style.gridTemplateRows = repeatString;
 
    return; 
    
}
//a function that puts a div into each box
function setDivs(size) {

    
    
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let oneDiv = document.createElement("div");
            oneDiv.style.height = "100%";
            oneDiv.style.width = "100%";
            oneDiv.id = `${i} , ${j}`;
            oneDiv.style.gridRow = `${i}/${i+1}`;
            oneDiv.style.gridRow = `${j}/${j+1}`;
            middle.appendChild(oneDiv);
        }

    }
}

function makeDivBlack(divID){
    document.querySelector(divID).style.backgroundColor = "black";
}

makeBoxes(size);
setDivs(size);


inputs.addEventListener("click", draw())
function draw() {
    inputs.forEach(radio => {
        if(radio.checked){
            
            middle.addEventListener("hover", makeDivBlack(middle.child))




        }
        
    });
}