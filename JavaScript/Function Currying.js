// FUNCTION TAKING MULTIPLE ARGUMENTS
function add(a,b,c){
    return a+b+c;
}
console.log(add(10,20,30))
// FUNCTION CURRYING
let add1=a=>b=>c=>a+b+c;
console.log(add1(10)(20)(30))