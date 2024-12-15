// GLOBAL SCOPE
// var a=10
// let b=20
// const c=30
// console.log(a)
// console.log(b)
// console.log(c)
// function pushpa(){
// console.log("INSIDE FUNCTION")
// console.log(a)
// console.log(b)
// console.log(c)
// }
// pushpa()
// {
//     console.log("INSIDE BLOCK")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// FUNCTION/LOCALSCOPE
// function Pranay(){
// var a=10
// let b=20
// const c=30
// console.log("INSIDE FUNCTION")
// console.log(a)
// console.log(b)
// console.log(c)
// }
// Pranay()

// console.log("OUTSIDE FUNCTION AND BLOCK")
// console.log(a)
// console.log(b)
// console.log(c)
// {
//     console.log("INSIDE BLOCK")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// BLOCK SCOPE
{
    var a=10;
    let b=20;
    const c=30;
    console.log("INSIDE BLOCK")
    console.log(a)
    console.log(b)
    console.log(c)
}
// console.log("OUTSIDE FUNCTION AND BLOCK")
// console.log(a)
// console.log(b)
// console.log(c)
function push(){
    console.log("INSIDE FUNCTION")
    console.log(a)
    console.log(b)
    console.log(c)
}
push()
