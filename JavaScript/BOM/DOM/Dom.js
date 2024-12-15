console.log(window)
console.log(document)

// DIRECT ACCESS
// console.log(document.all)
// console.log(document.all[12])
// console.log(document.head)
// console.log(document.title)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.images)

// getElementById()

// let h1=document.getElementById("sleep")
// let para=document.getElementById("para")
// console.log(h1)
// console.log(para)
// function pushpa(){
// h1.style.color="yellow"
// h1.style.textAlign="center"
// }

// getElementsByClassName()

// let elements=document.getElementsByClassName("lotsofsleep")
// console.dir(elements)

// @first-way

// for(let i=0;i<elements.length;i++){
//     elements[i].style.color="green"
//     elements[i].style.backgroundColor="yellow"
// }
// elements.style.color="red"

// @Second way

// let convertedToArray=Array.from(elements)
// console.log(convertedToArray)
// convertedToArray.forEach((ele)=>{
//     ele.style.color="hotpink"
//     ele.style.backgroundColor="aqua"
// })

// getElementsByTagName()

// let h1=document.getElementsByTagName("h1")
// let p=document.getElementsByTagName("p")
// console.log(h1)
// console.log(p)
// for(let i=0;i<p.length;i++){
//     p[i].style.color="fuchsia"
//     h1[i].style.color="red"
// }


// getElementsByName()

// let elements=document.getElementsByName("pushpa")
// console.log(elements)
// for(let i=0;i<elements.length;i++){
//     elements[i].style.background="red"
//     elements[i].style.color="white"
// }

// querySelector()

// @ID
// let h1=document.querySelector("#sleep")
// console.dir(h1)
// h1.style.color="deeppink"
// h1.style.backgroundColor="goldenrod"

// @CLASS
// let elements=document.querySelector(".lotsofsleep")
// elements.style.color="white"
// elements.style.backgroundColor="black"

// @TAG NAME
// let input=document.querySelector("input")
// console.log(input)
// input.style.background="red"

// @ATTRIBUTE SELECTOR
// let password=document.querySelector("[name=password]")
// console.log(password)
// password.style.background="green"

// querySelectorAll()

// @ID
// let h1=document.querySelectorAll("#sleep")
// console.dir(h1)
// h1.forEach((ele)=>{
//     ele.style.color="deeppink"
// })

// @CLASS
// let elements=document.querySelectorAll(".lotsofsleep")
// console.log(elements)
// elements.forEach((ele)=>{
//     ele.style.color="blue"
// })

// @TAG NAME
// let input=document.querySelectorAll("input")
// console.log(input)
// input.forEach((ele)=>{
//     ele.style.color="yellow"
// })

// @ATTRIBUTE SELECTOR
// let password=document.querySelectorAll("[name=password]")
// console.log(password)
// password.forEach((ele)=>{
//     ele.style.color="red"
// })

//!write() and writeln()
// @write()
// document.write("HELLO FROM DOM")
// document.write("<h1>HELLO FROM DOM</h1>")
// document.write(`<div>
//     <h1>Hello</h1>
//     <p>Hi</p>
//     </div>`)

    // @writeln()
    // document.writeln("<h1>I am dom using writeln method</h1>")
    // document.writeln("<h1>I am dom using writeln method</h1>")

//   ACCESSING TEXT CONTENT INSIDE A TAG
// let para=document.getElementById("para")
// console.log(`TEXTCONTENT:${para.textContent}`)
// console.log(`INNERTEXT:${para.innerText}`)
// console.log(`INNERHTML:${para.innerHTML}`)

//   SETTING TEXT CONTENT INSIDE A TAG
// let section=document.getElementById("container")
// console.log(section)
// section.textContent="<h1>HELLO FROM TEXTCONTENT</h1>"
// section.innerText="<h1>HELLO FROM INNERTEXT</h1>"
// section.innerHTML=`<h1 style="color:red">HELLO FROM INNERHTML</h1>
// <p>this is paragraph tag</p>
// <button>this is button tag</button>`

// GET ATTRIBUTES
// @getAttribute() and getAttributeNode()
// let section=document.querySelector("section")
// console.log(section.getAttribute("pushpa"))
// console.log(section.getAttributeNode("pushpa"))

// setAttribute()
// let h1=document.querySelector("h1")
// console.log(h1)
// h1.setAttribute("id","hello","class","bye")
// h1.setAttribute("class","bye first")
// h1.setAttribute("random","something")

// removeAttribute()
// let h1=document.querySelector("h1")
// console.log(h1)
// function remove(){
//     h1.removeAttribute("id")
//     h1.removeAttribute("class")
//     console.log(h1)
// }

// !classList
// let section=document.querySelector("section")
// console.log(section)
// let dealWithClass=()=>{
//     console.log(section.classList)
//     section.classList.add("one","two","three","four")
//     section.classList.remove("two","three")
//     console.log(section.classList.contains("one"))
//     section.classList.toggle("four")
//     console.log(section.classList.item(2))
//     console.log(section.classList.length)
// }
// console.log(section.className)

// @createElement()
// let h1=document.createElement("h1")
// let para=document.createElement("p")
// let btn=document.createElement("button")
// console.log(h1)
// console.log(para)
// console.log(btn)

// @createComment()
// let comment1=document.createComment("THIS IS PUSHPA THAGEDHE LE")
// console.log(comment1)
// let comment2=document.createComment("THIS IS NANDU🩻")
// console.log(comment2)
// @createTextNode()
let h1Text=document.createTextNode("HEADING")
let pText=document.createTextNode("THIS IS PARAGRAPH")
let btnText=document.createTextNode("THIS IS BOTTON")
// console.log(h1Text)
// console.log(pText)
// console.log(btnText)

// appendChild()
// h1.appendChild(h1Text)
// para.appendChild(pText)
// btn.appendChild(btnText)
// append()
// h1.append(h1Text)
// para.append(pText)
// btn.append(btnText)

// @ append vs appendChild
// h1.appendChild(h1Text,pText)
// h1.append(h1Text,pText)

// @Displaying elements into webpage
// let body=document.body
// console.log(body)
// body.append(h1,para,btn)

// children and childNoes
// let body=document.body 
// console.log(body)
// console.log(body.children)
// console.log(body.childNodes)

// insertBefore()
// let h1=document.querySelector("h1")
// let p=document.querySelector("p")
// let body=document.body
// let change=()=>{
//     body.insertBefore(p,h1)
// }

// replaceChild()
let replacingElement=document.getElementById("toBeReplaced")
let newElement=document.createElement("li")
newElement.innerText="NEW CONTENT"
let parentElement=document.querySelector("ul")
let replace=()=>{
    parentElement.replaceChild(newElement,replacingElement)
}

// removeChild()
let remove=()=>{
    let elementToBeRemoved=document.getElementById("toBeRemoved")
    let parentElement=document.querySelector("ul")
    parentElement.removeChild(elementToBeRemoved)
}