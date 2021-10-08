let body = document.querySelector("body");
let sidebar = document.querySelector("#sidebar");
let  header = document.querySelector("#top");
let middle = document.querySelector("#middle");
let footer = document.querySelector("#foot");
//document vars

let size = prompt("size of grid? ")

function makeBoxes(size) {
    let repeatString = "repeat(" + size + ", 1fr)"
    console.log(repeatString);
    middle.style.gridTemplateColumns = repeatString;
    middle.style.gridTemplateRows = repeatString;
 
    return; 
    
}

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


makeBoxes(size);
setDivs(size);