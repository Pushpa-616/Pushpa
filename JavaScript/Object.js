// LITERAL WAY
// let bioData1={
//     name:"Pushpalatha",
//     age:20,
//     salary:30000,
//     isEmployee:true,
//     attitude:null,
//     mobile:undefined,
//     skills:["java","dance","rider","model"],
//     fun:function hello(){
//         console.log("Ready to Marry")
//     }
// }
// console.log(bioData1)
// console.log(typeof bioData1)

// *ACCESSING OBJECT PROPERTIES
// *DOT NOTATION
// console.log(bioData1.name)
// console.log(bioData1.age)
// bioData1.fun()
// console.log(bioData1.salary)
// console.log(bioData1.isEmployee)
// console.log(bioData1.attitude)
// console.log(bioData1.mobile)
// console.log(bioData1.skills)
//* BOX NOTATION
// console.log(bioData1["name"])
// console.log(bioData1["age"])
// bioData1["fun()"]
// console.log(bioData1["salary"])
// console.log(bioData1["isEmployee"])
// console.log(bioData1["attitude"])
// console.log(bioData1["mobile"])
// console.log(bioData1["skills"])

//*CONSTRUCTOR OBJECT
// let bioData2=new Object()
// bioData2.name="Nandhini"
// bioData2.age=19
// bioData2.isEmployee=false
// console.log(bioData2)
// console.log(typeof bioData2)

//* DEALING WITH CONST KEYWORD
//* ARRAYS
// const arr=["Everyone","Observe","Here"]
// *modifying element is possible
// arr[2]="THERE"
// console.log(arr)
// *reassigning new array is not possible
// arr=["Everyone"]
// console.log(arr)

// *OBJECTS
// const obj={
//     name:"Anitha",
//     age:20
// }
 // *MODIFYING PROPERTIES IS POSSIBLE
// obj.age=25
// console.log(obj)
// *REASSIGNING NEW OBJECT IS NOT POSSIBLE
// obj={
//     name:"Monty"
// }
// console.log(obj)

// *OBJECT PROPERTIES AND METHODS

// let obj={
//     name:"Rahul",
//     age:45,
//     skills:["Html","Css","Js","React"]
// }

// *1)OBJECT

// delete obj.age
// console.log(obj)

// *2)Object.keys()

// let keys=Object.keys(obj)
// console.log(keys)

// *3)Object.values()

// let values=Object.values(obj)
// console.log(values)

// *4)Object.entries()

// let entries=Object.entries(obj)
// console.log(entries)

// *5)Object.fromEntries()

// let nestedArray=[
//     ['name','Rahul']
//     ['age',45]
//     ['skills',["Html","Css","Js","React"]]
// ]
// let finalObj=Object.fromEntries(nestedArray)
// console.log(finalObj)

// *6)Object.assign()

// let obj1={
//     name:"Monty",
//     subject:"Python"
// }
// let obj2={
//     place:"Hyderabad"
// }
// let obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

// @CONVERTING ARRAY TO OBJECT

// let arr=["Python","Java","Javascript"]
// let finalObj1=Object.assign({},arr)
// console.log(finalObj1)

// @CONVERTING STRING TO OBJECT

// let str="JAVASCRIPT"
// let finalObj2=Object.assign({},str)
// console.log(finalObj2)

// *7)Object.seal()

// let obj={
//     name:"Rahul",
//     age:20
// }
// Object.seal(obj)

// @Adding property

// obj.place="Hyderabad"
// console.log(obj)

 // @Delete property

// delete obj.age
// console.log(obj)

 // @Modify Existing property

// obj.name="Prabhas"
// console.log(obj)

// *8)Object.freeze()

// let obj={
//     name:"Rahul",
//     age:20
// }
// Object.freeze(obj)

// @Adding property

// obj.place="Hyderabad"
// console.log(obj)

// @Delete property

// delete obj.age
// console.log(obj)

// @Modify Existing property

// obj.name="Prabhas"
// console.log(obj)




