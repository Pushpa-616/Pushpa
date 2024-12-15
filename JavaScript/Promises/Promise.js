let p=new Promise((resolve,reject)=>{
    let goingToMehfil=true;
    if(goingToMehfil){
        resolve("Finally we went to Mehfil")
    }else{
        reject("Sorry guys i was busy")
    }
})
p.then((val)=>{
    console.log(val)
    console.log("PRIMISE GOT RESOLVED")
}).catch((error)=>{
    console.log(error)
    console.log("PROMISE GOT REJECTED")
})