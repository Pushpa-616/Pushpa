// using then()

// let data=fetch("https://fakestoreapi.com/products")
// data.then((res)=>{
//     let finalOutput=res.json()
//     finalOutput.then((output)=>{
//         console.log(output)
//     });
// })

// using async and await

// let fetchData=async()=>{
//     let data=await fetch("https://fakestoreapi.com/products")
//     let result=await data.json()
//     console.log(result)
// }
// fetchData()

let data=fetch("https://fakestoreapi.com/products")
data.then((res)=>{
    let finalOutput=res.json()
    finalOutput.then((output)=>{
        output.forEach((ele,index,array)=>{
            let section=document.getElementById("container")
            section.innerHTML+=`
            <h1>${ele.id}</h1>
            <h1>${ele.title}</h1>
            <img src=${ele.image}>
            <p>${ele.description}</p>
            `
        })
    })
})