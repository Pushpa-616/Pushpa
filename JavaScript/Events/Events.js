// KEYPRESS
let nameInput=document.getElementById("name")
nameInput.addEventListener("keypress",()=>{
    // console.log(e.key)
    // console.log(e.keyCode)
    console.log("KEY IS PRESSED")
})

// KEYUP
nameInput.addEventListener("keyup",()=>{
    console.log("KEY IS RELEASED")
})

// KEYDOWN
nameInput.addEventListener("keydown",()=>{
    console.log("KEYDOWN")
})