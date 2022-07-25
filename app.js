//palette: EEF4D4 DAEFB3 D1B1CB 2E2F2F 051014
const sketch = document.querySelector(".sketch") //where the magic happens!
const num = 6
const dimension = 50/num
const box = document.createElement('div') //the template for a pixel
box.style.border = '1px solid lightgray'
box.style.width = `${dimension}%`
box.style.height = `${dimension}%`
box.classList.add("box")

for (let i = 0; i < num * num; i++) {
    sketch.appendChild(box.cloneNode(true))
    
}



