let outer=document.getElementById("outer")
let inner=document.getElementById("inner")
outer.addEventListener("click",()=>{
    alert("OUTER BOX IS CLICKED")
},false)
inner.addEventListener("click",(e)=>{
    alert("INNER BOX IS CLICKED")
    e.stopPropagation()
},false)