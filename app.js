//palette: EEF4D4 DAEFB3 D1B1CB 2E2F2F 051014


//sheinanigans to be understood
// const num = 6
// const dimension = 50/num

//table templates
const table = document.getElementById("table") //where the magic happens!
const tr = document.createElement("tr")
const td = document.createElement("td")

//the template for a pixel
// const box = document.createElement("div")
// box.style.border = '1px solid lightgray'
// box.style.width = `${dimension}%`
// box.style.height = `${dimension}%`
// box.classList.add("box")
// old, folded
// for (let i = 0; i < num * num; i++) {
//     table.appendChild(box.cloneNode(true))
// }

//trying to place pixels with table element
let gridSize = 6

function fillTable(size){
for (let horizontal = 0; horizontal < size; horizontal++) {
    let row = tr
    row.className = horizontal.toString()
    table.appendChild(row)
    for (let vertical = 0; vertical < size; vertical++) {
        let col = td
        col.className = vertical.toString()
        row.appendChild(col)

    }
    
 }  
}
    
fillTable(gridSize)