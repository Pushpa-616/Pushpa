// let name="Pushpa"
// let age="21"
// let isstudent=true
// array literal way
// let data=["Pushpa",21,true]
// console.log(data)
// console.log(typeof data)
// array constructor object way
// let arr=new Array(3)
// arr[0]="Pushpa"
// arr[1]=21
// arr[2]=true
// arr[3]="java"
// console.log(arr)
// ACCESSING ARRAY ELEMENTS
// let arr1=["Kalki2898AD",true,100]
// let arr2=new Array("Javascript",10,false)
// console.log(arr1[0])
// console.log(arr2[2])
// console.log(arr1[100])
// console.log(arr2[-1])
// console.log(arr2[arr2.length-2])
// // LENGTH PROPERTY
// console.log(arr1.length)
// console.log(arr2.length)
// MULTIDIMENSIONAL ARRAY / NESTED ARRAY
// let nestedArray=[
//     ["Tillu",30,2,"DJPLAYER"],
//     ["Radhika",26,4,"SINGER"],
//     ["Lilly",28,1,"COP"]
// ]
// console.log(nestedArray[1][1])
// console.log(nestedArray[2][1])
// console.log(nestedArray[0][3])
// console.log(nestedArray[1][3])
// console.log(nestedArray[2][3])
// ARRAY METHODS TO ADD OR DELETE THE ELEMENTS
// let snacks=["Biscuit","Pani Puri","Chips"]
// snacks.push("Maggi","Kachori")
// console.log(snacks)
// snacks.pop()
// console.log(snacks)
// snacks.unshift("Mirchi","Punugulu")
// console.log(snacks)
// snacks.shift()
// console.log(snacks)

// ARRAY METHODS
// *1)toString()
// let brands=["Black Dog","Teachers","Red Label","Kingfisher"]
// console.log(brands)
// console.log(typeof brands)
// let convertedToString=brands.toString()
// console.log(convertedToString)
// console.log(typeof convertedToString)

// *2)join()
// let makeup=["Lakme","Suger","Hudabeauty","MamaEarth"]
// console.log(makeup.join("*"))
// console.log(makeup.join("PUSH"))

// *3)at()
// let goodNews=["Tommorow","Class","Will","Not","Be","There"]
// console.log(goodNews.at(0))
// console.log(goodNews.at(5))
// console.log(goodNews.at(-2))

// *4)flat()
// let num=[1,2,3,[4,5,[6,7,[8,9]]]]
// console.log(num.flat())
// console.log(num.flat(2))
// console.log(num.flat(Infinity))

// *5)concat()
// let arr1=["Pushpa","Gayatri","Anitha","Shireesha"]
// let arr2=["Dark Fantasy","Parle-G","Pedigree"]
// let arr3=["Lays","Kurkure","Doritos"]
// console.log(arr1.concat(arr2,arr3))
// console.log(arr1.concat("Srisailam","Harish","Naresh"))

// *6)reverse()
// let frontEnd=["HTML","CSS","JAVASCRIPT","REACT"]
// console.log(frontEnd.reverse())

// *7)sort()
// let val=[true,9,4,2,1,5,10,20,60,"Pushpa","Anitha","Queen"]
// console.log(val.sort())
// *8)isArray()
// let arr1=[1,2,3,4,5]
// let arr2=new Array(6,7,8,9,10)
// let str="SUNDAY"
// console.log(Array.isArray(arr1))
// console.log(Array.isArray(arr2))
// console.log(Array.isArray(str))

// *9)delete
// let backEnd=["Java","Python","Javascipt"]
// delete backEnd[0]
// console.log(backEnd)

// *10)includes()
// let arr=["Boost","Bournvita","Horlicks","Complan"]
// console.log(arr.includes("Boost"))
// console.log(arr.includes("Complan"))
// console.log(arr.includes("Bournvita",2))
// console.log(arr.includes("Bournvita",-1))
// console.log(arr.includes("Bournvita",-3))

// *11)slice()
// let sweets=["Rasagulla","Jelabi","Kalakand","Gulab Jamun"]
// console.log(sweets.slice(0))
// console.log(sweets.slice(-3))
// console.log(sweets.slice(0,2))
// console.log(sweets.slice(-4,-2))
// console.log(sweets.slice(3,0))
// console.log(sweets.slice(4))

// *12)splice(startIndex , DeleteCount , ItemsToBeAdded)
// let drinks=["ThamsUp","Sprite","Mountain Dew","Maaza"]
// console.log(drinks.splice(1,2,"RedBull"))
// console.log(drinks)
// console.log(drinks.splice(0,3,"Pepsi"))
// console.log(drinks)
// console.log(drinks.splice(2,0,"Campa","Fanta"))
// console.log(drinks)
// console.log(drinks.splice(-2,1,"PaperBoat","MinuteMaid"))
// console.log(drinks)

// *13)indexOf()
// let dance=["Hip-Hop","Salsa","Teen Maar","Marfa","Salsa"]
// console.log(dance.indexOf("Marfa"))
// console.log(dance.indexOf("Salsa"))
// console.log(dance.indexOf("Salsa",2))
// console.log(dance.indexOf("Dj Dance"))
// console.log(dance.indexOf("Teen Maar",-2))

// *14)lastIndexOf()
// let dance=["Hip-Hop","Salsa","Teen Maar","Marfa","Salsa"]
// console.log(dance.lastIndexOf("Marfa"))
// console.log(dance.lastIndexOf("Salsa"))
// console.log(dance.lastIndexOf("Salsa",2))
// console.log(dance.lastIndexOf("Dj Dance"))
// console.log(dance.lastIndexOf("Teen Maar",-2))

// ARRAY HEIGHER ORDER METHODS
// *1)forEach()
// EXAMPLE1
// let food=["Chicken Biryani","Pasta","Pulav","Shawarma"]
// food.forEach((element,index,array)=>{
//   console.log(element,index,array)
// })

// EXAMPLE2
    // let numbers=[1,2,3,4,5,6,7,8,9,10]
    // numbers.forEach((element)=>{
    //  console.log(element*8)
    // })

// EXAMPLE3
// let nestedArray=[
//     ["Tillu",30,2,"DJPLAYER"],
//     ["Radhika",26,4,"SINGER"],
//     ["Lilly",28,1,"COP"]
// ]
// nestedArray.forEach((profession)=>{
// console.log(profession[3])
// })

// *2)map()
// EXAMPLE1
// let food=["Chicken Biryani","Pasta","Pulav","Shawarma"]
// food.map((element,index,array)=>{
//   console.log(element,index,array)
// })

// EXAMPLE2
// let food=["Chicken Biryani","Pasta","Pulav","Shawarma"]
// let finalOutput=food.map((element,index,array)=>{
//     return index
// })
//   console.log(finalOutput)

//   EXAMPLE3
//   let numbers=[1,2,3,4,5,6,7,8,9,10]
//    let finalOutput= numbers.map((element)=>{
//         return element*8
//     })
//     console.log(finalOutput)

// *3)filter()
// let arr=[20,3,4,10,7]
// let finalOutput=arr.filter((element,index,array)=>{
//       return element>=10
// })
// console.log(finalOutput)

// *4)reduce()
// Sum of array elements using for-loop
// let arr=[1,2,3,4,5]
// let sum=5;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)

// Sum of array elements using reduce method
// let finalOutput=arr.reduce((storage,element,index,array)=>{
//   return storage+=element
// },5)
// console.log(finalOutput)

// *5)every()
// let arr=[10,30,4,6,8]
// let finalOutput=arr.every((element,index,array)=>{
//     return element>0
// })
// console.log(finalOutput)

// *6)some()
// let arr=[10,30,4,6,8]
// let finalOutput=arr.some((element,index,array)=>{
//     return element>40
// })
// console.log(finalOutput)







