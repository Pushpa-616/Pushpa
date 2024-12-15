let dropdown = document.getElementById("drop")
let color1 = document.getElementById("one")
let color2 = document.getElementById("two")
let color3 = document.getElementById("three")
let box1 = document.getElementById("box")

let col1,col2,col3;

dropdown.addEventListener("change", () => {
    let gradientValue = dropdown.value;
    switch(gradientValue){
        case "linear":
            box1.style.backgroundImage =`linear-gradient(${col1}, ${col2}, ${col3})`
            break;
        case "radial":
            box1.style.backgroundImage =`radial-gradient(${col1}, ${col2}, ${col3})`
            break;
        case "conic":
            box1.style.backgroundImage =`conic-gradient(${col1}, ${col2}, ${col3})`
            break;
    }
})

color1.addEventListener("input", () => {
    col1 = color1.value;
    console.log(col1);
})

color2.addEventListener("input", () => {
    col2 = color2.value;
    console.log(col2);
})

color3.addEventListener("input", () => {
    col3 = color3.value;
    console.log(col3);
})