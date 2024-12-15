
let main=document.getElementById("card")
let btn=document.getElementById("button")
let h3=document.getElementById("result")

btn.addEventListener("click",()=>{
    h3.innerHTML=print()
})

function print(){
    let input1=document.getElementById("input1").value
    let input2=document.getElementById("input2").value
    let option=document.getElementById("operator").value
    switch(option){
        case "+" :res =Number(input1)+Number(input2)
        break;
        case "-" :res =input1-input2
        break;
        case "*":res =input1*input2
        break;
        case "/":res=input1/input2
        break;

    } 
    return result=res;
}