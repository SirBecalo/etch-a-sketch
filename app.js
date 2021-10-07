let body = document.querySelector("body");
let sidebar = document.querySelector("#sidebar");
let  header = document.querySelector("#top");
let middle = document.querySelector("#middle");
let footer = document.querySelector("#foot");
//document vars

let size = 16


//function for making the grid
function makeGrid(gridSize) {
    if (gridSize <= 0) return;
    let oneDiv = document.createElement('div');
    oneDiv.id = gridSize
    middle.appendChild(oneDiv);
    makeGrid(gridSize-1);
    
}

//grid size
makeGrid(size);
setGrid(size);

function setGrid(gridSize) {
}