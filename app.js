//palette: EEF4D4 DAEFB3 D1B1CB 2E2F2F 051014
const table = document.querySelector(".table") //where the magic happens!

//sheinanigans to be understood
// const num = 6
// const dimension = 50/num

//table templates
const tr = document.createElement('tr')
const td = document.createElement('td')

//the template for a pixel
const box = document.createElement('div')
box.style.border = '1px solid lightgray'
box.style.width = `${dimension}%`
box.style.height = `${dimension}%`
box.classList.add("box")
// old, folded
// for (let i = 0; i < num * num; i++) {
//     table.appendChild(box.cloneNode(true))
// }

//trying to place pixels with table element
let gridSize = 6


for (let horizontal = 0; horizontal < gridSize; horizontal++) {
    const row = tr.className.add(horizontal.toString())
    for (let vertical = 0; vertical < gridSize; vertical++) {
        const col = td.className.add(vertical.toString())
        row.appendChild(col)

    }
    table.appendChild(row)
 }
    
