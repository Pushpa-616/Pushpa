// String Literals
// let a='Hello';
// let b="20";
// let c='r';
// let d=`Monday`
// console.log(d)
// console.log(typeof d)
// String Constructor Object
// const str=new String("Welcome")
// console.log(str) 
// console.log(typeof str)
// NOTE
// let val1="JAVASCRIPT"
// let val2=new String("JAVASCRIPT")
// console.log(val1==val2)
// console.log(val1===val2)
// STRING INTERPOLATION/TEMPLATE STRINGS/STRING TEMPLATES
// let firstName="Pushpalatha";
// let lastName="Damarla"
// let age=21;
// console.log("My full name is "+firstName+" "+lastName+" and my age is"+21)
// console.log(`My full name is ${firstName} ${lastName} and my age is ${age}`)
// ACCESSING THE CHARACTERS OF A STRING
// let name="PUSHPA"
// console.log(name[0])
// console.log(name[5])
// console.log(name[7])
// console.log(name[-3])
// console.log(name.length)
// console.log(name[name.length-1])

// let val=new String("ROHIT SHARMA")
// console.log(val[2])
// console.log(val[4])
// console.log(val.length)
// console.log(val[val.length-3])
// STRING METHODS
// 1)charAt()
// let str1="wait for sometime i will leave"
// console.log(str.charAt(0))
// console.log(str.charAt(6))
// console.log(str.charAt(-5))
// 2)charCodeAt()
// let str2="A so i am so happy"
// console.log(str2.charCodeAt(0)) 
// console.log(str2.charCodeAt(4))
// 3)toLowerCase()
// let str3="DFGHOJPKLJHVGCFVHBNMLKJHG"
// console.log(str3)
// console.log(str3.toLowerCase())
// 4)toUpperCase()
// let str4="rtyguhjkljhiguytdfyghjk"
// console.log(str4)
// console.log(str4.toUpperCase())
// 5)repeat()
// let str5="patil"
// console.log(str5.repeat(0))
// console.log(str5.repeat(1))
// console.log(str5.repeat(5))
// 6)replace() AND replaceAll()
// let str6="Hello EveryOne Hello How Are you Hello"
// console.log(str6.replace("Hello","bye"))
// console.log(str6.replaceAll("Hello","Hai"))
// 7)split()
// let str7="AMMA THODU ADDANGA NARIKESTA"
// console.log(str7.split(" "))
// console.log(str7.split("A",2))
// 8)concat()
// let str0="MOKKE KADA"
// let str90="ANI PEKESTE"
// let str100="MOKKE KADA"
// console.log(str0.concat(str90,str100))
// console.log(str0.concat(" ",str90," ",str100))
// trimStart()
// let str11="    ATLUNTADHI MANATHONI"
// console.log(str11)
// console.log(str11.length)
// console.log(str11.trimStart)
// console.log(str11.trimStart().length)
// trimEnd()
// let str12="PUSHPALATHA    "
// console.log(str12)
// console.log(str12.length)
// console.log(str12.trimEnd)
// console.log(str12.trimEnd().length)
// trim()
// let str13="   BOX BADDALUDDI   "
// console.log(str13)
// console.log(str13.trim())
// console.log(str13.trim().length)
// indexOf()
// let str14="LET ME SPECIFY ONE SENTENCE"
// console.log(str14)
// console.log(str14.indexOf("M"))
// console.log(str14.indexOf("E"))
// console.log(str14.indexOf("S",4))
// console.log(str14.indexOf("S",8))
// console.log(str14.indexOf("S",-8))
// console.log(str14.indexOf("R"))
// lastIndexOf()
// let str15="LET ME SPECIFY ONE SENTENCE"
// console.log(str15)
// console.log(str15.lastIndexOf("M"))
// console.log(str15.lastIndexOf("E"))
// console.log(str15.lastIndexOf("S",4))
// console.log(str15.lastIndexOf("S",8))
// console.log(str15.lastIndexOf("R"))
//includes()
// let str16='NENU OKKA SARI COMMIT AYTHE MATA'
// console.log(str16.includes("K"))
// console.log(str16.includes("Z"))
// console.log(str16.includes("N"))
// console.log(str16.includes("U",3))
// console.log(str16.includes("N",-100))
// startsWith()
// let str17="MOYE MOYE"
// console.log(str17.startsWith("M"))
// console.log(str17.startsWith("O"))
// console.log(str17.startsWith("Y",2))
// console.log(str17.startsWith("Y",-1))
// endsWith()
// let str18="MOYE MOYE"
// console.log(str18.endsWith("M"))
// console.log(str18.endsWith("E"))
// console.log(str18.endsWith("Y",8))
// console.log(str18.endsWith("M",0))
// slice(startIndex,endIndex)
// let str19="good afternoon"
// console.log(str19)
// console.log(str19.slice(0))
// console.log(str19.slice(5))
// console.log(str19.slice(0,4))
// console.log(str19.slice(5,8))
//  console.log(str19.slice(8,5))
//  console.log(str19.slice(8,2))
//  console.log(str19.slice(-4,-1))
//  console.log(str19.slice(-1,-4))
// console.log(str19.slice(-7,5))
// subString(startIndex,endIndex)
let str20="good afternoon"
console.log(str20)
console.log(str20.substring(0))
console.log(str20.substring(5))
console.log(str20.substring(0,4))
console.log(str20.substring(5,8))
 console.log(str20.substring(8,5))
 console.log(str20.substring(8,2))
 console.log(str20.substring(-4,-1))
 console.log(str20.substring(-1,-4))
console.log(str20.substring(-7,5))
