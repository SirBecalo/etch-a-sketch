//palette: EEF4D4 DAEFB3 D1B1CB 2E2F2F 051014


//sheinanigans to be understood
// const num = 6
// const dimension = 50/num

//table templates
const sketch = document.querySelector(".sketch") //where the magic happens!


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
for (let pixels = 0; pixels <= size; pixels++) {
    const pixel = document.createElement("div") //1 div,  pixel!
    pixel.id = pixels //gotta name them all!
    sketch.appendChild(pixel) //gotta dispaly them all!
 }  
}
    
fillTable(gridSize ** 2)