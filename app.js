//palette: EEF4D4 DAEFB3 D1B1CB 2E2F2F 051014



const sketch = document.querySelector(".sketch") //where the magic happens!

let gridSize = 6

function fillTable(size){
    for (let cols = 0; cols <= size; cols++) {
        const col = document.createElement("div") //1 div,  1 col!
        col.id = cols //gotta name them all!
        col.classList.add("col")
        sketch.appendChild(col) //gotta dispaly them all!
        for (let pixels = 0; pixels <= size; pixels++) {
            const pixel = document.createElement("div") //1 div,  1 col!
            pixel.id = pixels //gotta name them all!
            pixel.classList.add("pixel")
            col.appendChild(pixel) //gotta dispaly them all!



        }  
    }
}

    
fillTable(gridSize)

