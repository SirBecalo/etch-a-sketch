//palette: EEF4D4 DAEFB3 D1B1CB 2E2F2F 051014



const sketch = document.querySelector(".sketch") //where the magic happens!

const options = document.querySelector("#options")//the form

let gridSize = document.querySelector("#sizeSlider").value // size selected by slider, default 36
console.log(gridSize)

function createCanvas(size){

    //nested for loops, one to create cols, one to fill each col with pixels
    for (let cols = 0; cols <= size; cols++) {
        const col = document.createElement("div") //1 div = 1 col!
        col.id = `col${cols}` //gotta name them all! IDing in numerical order
        col.classList.add("col") //aggregate for easy styleing
        sketch.appendChild(col) //gotta dispaly them all!

        for (let pixels = 0; pixels <= size; pixels++) {
            const pixel = document.createElement("div") //1 div = 1 pixel!
            pixel.id = `col${cols}pixel${pixels}` //gotta name them all numerical order! 
            pixel.classList.add("pixel") //aggregate for easy styling
            col.appendChild(pixel) //gotta dispaly them all!

        }  
    }
}

// sketch.addEventListener(onmouseover, changeColorBlack(sketch), false)
createCanvas(gridSize)




// changes element color when called by listener
//to scale this up i think classlist editing will be more appropriate.
sketch.onmouseover = function (event) {
    let toChange = event.target.closest('.pixel')
    console.log(toChange)
    toChange.style.backgroundColor = "black"
    
}
