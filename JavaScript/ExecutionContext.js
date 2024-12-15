// console.log("code starts")
// var a=10;
// let b=20;
// const c=30;
// function print(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// print()
// EXAMPLE2
// console.log("Hello");
// function a(){
//     b();
//     console.log("Inside A");
// }
// function b(){
//     c();
//     console.log("Inside B");
// }
// function c(){
//     console.log("Inside c");
// }
// a();
// EXAMPLE3
// console.log('code starts')
// let a=()=>{
//     console.log("A function executed");
// }
// function b(){
//     var num1=10;
//     const num2=20;
//     console.log(num1+num2);
// }
// b()
// a()
// EXAMPLE4
console.log("closure");
function outer(){
    var a=10;
    let num=20;
    function inner(){
        let b=20;
        console.log(a+b);
    }
    inner()
}
outer()