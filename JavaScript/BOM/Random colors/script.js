function changeColors(){
    let body=document.body
    let red=Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)
    let finalColorValue=`rgb(${red},${green},${blue})`
    console.log(finalColorValue)
    body.style.backgroundColor=finalColorValue
}