let name=document.getElementById("name")
let phone=document.getElementById("phone")
let password=document.getElementById("password")
let cpassword=document.getElementById("cpassword")

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(name.value)
    // console.log(phone.value)
    // console.log(password.value)
    // console.log(cpassword.value)
    let finalName=name.value
    let finalPhone=phone.value
    let finalPassword=password.value
    let finalCpassword=cpassword.value

    // Name
    if(finalName.length<3 || finalName.length>10){
        name.style.border="2px solid red"
        alert("ENTER THE CHARACTERS BETWEEN THE RANGE 3 TO 10")
    }
    else{
        name.style.border="2px solid green"
    }

    // Phone
    if(finalPhone.length=10){
        alert("ENTER 10 DIGIT NUMBER")
    }
    if(isNaN(finalPhone)){
        alert("ENTER ONLY NUMERICAL VALUES")
    }

    // Password
    if(finalPassword!=finalCpassword){
        alert("PASSWORD IS NOT MATCHING")
    }
})

// PASSWORD VISIBILITY
let eye=document.getElementById("eye")
let visibility=false;
eye.addEventListener("click",()=>{
    if(visibility){
        password.type="password";
        visibility=false
    }else{
        password.type="text";
        visibility=true;
    }
})
