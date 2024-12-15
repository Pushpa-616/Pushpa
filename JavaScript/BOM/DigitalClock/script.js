let hours=document.getElementById("hour")
let minutes=document.getElementById("min")
let seconds=document.getElementById("sec")
setInterval(()=>{
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    if(h>12){
        h=h-12
    }
    h=h<10?"0"+h:h
    m=m<10?"0"+m:m
    s=s<10?"0"+s:s
    hour.innerText=h
    min.innerText=m
    sec.innerText=s
},1000)
