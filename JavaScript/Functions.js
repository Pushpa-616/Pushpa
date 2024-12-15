// FUNCTIONS WITHOUT PARAMETERS WITH RETURN KEYWORD
// function display(){
//     return "Good Afternoon"
// }
// let output=display()
// console.log(output)
// // FUNCTION WITH PARAMETERS WITH RETURN KEYWORD
// function pushpa(a,b){
//     return a-b
// }
// console.log(pushpa(20,10))
// // FUNCTION EXTRA ARGUMENTS
// function interview1(a,b){
//     console.log(a+b)
// }
// interview1(10,20,30)
// // FUNCTION EXTRA PARAMETERS
// function interview2(a,b,c){
//     console.log(a+b+c)
// }
// interview2(10,20)
// // ANONYMOUS FUNCTION
// // EXAMPLE1
// let a=function(){
//     console.log("I AM ANONYMOUS FUNCTION")
// }
// a()
// // EXAMPLE2
// let add=function(val1 , val2){
//     return val1+val2
// }
// let answer=add(10,100)
// console.log(answer)
// // ARROW FUNCTION
// let arrow=()=>{
//     console.log("I AM ARROW FUNCTION")
// }
// arrow()
// // EXPLICIT RETURN ARROW FUNCTION
// let add1=(val1,val2)=>{
//     return val1+val2;
// }
// console.log(add(10,30))
// // IMPLICIT RETURN ARROW FUNCTION
// let add2=(val1,val2)=>val1+val2;
// console.log(add(10,40))
// // example2
// let print=()=>console.log("FIRST")
// print()
// // BEHAVIOUR OF ARROW FUNCTION
// // no parameter
// let push=_=>console.log("Good Afternoon")
// push()
// // single parameter
// let pranay=a=>a;
// console.log(pranay("hello"))
// IMMEDIATE INVOKED FUNCTION EXPRESSION (IIFE)
// EX1
// (function hello(){
//     console.log("Normal Function inside IIFE")
// })()
// EX2
// (function (){
// console.log("Anonymous Function inside IIFE")
//  })()
// EX3
// (()=>{
//     console.log("Arrow Function inside IIFE")
// })()
// HEIGHER ORDER FUNCTION
let add=(a,b)=>{
    return a+b;
}
let sub=(a,b)=>{
    return a-b;
}
let product=(a,b)=>{
    return a*b;
}
let calculator=(task , a, b)=>{
    return task(a,b)
}
console.log(calculator(add,10,30))
console.log(calculator(sub,30,5))
console.log(calculator(product,5,9))
