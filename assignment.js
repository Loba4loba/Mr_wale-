let surname= "Adewale" 
let firstname = "tolani" 
let othername = "damilola"

let surnameJoinFirst = surname.concat(" ",firstname)
let fullName = surnameJoinFirst.concat(" ",othername)
console.log(fullName)

let str = "Hello, world! how are you this morning it is a beautful world this morning?"
 occ1 = str.indexOf("o")
 occ1 = str.indexOf("o",occ1+1)
console.log(occ1)

let oc1 = str.indexOf("world")
let oc2 = str.indexOf("world",oc1+1)
console.log(oc2)

oc1 = str.lastIndexOf("world")
oc1 = str.lastIndexOf("world",oc1-1)
console.log(oc1)

oc2 = str.lastIndexOf("morning")
oc2 = str.lastIndexOf("morning",oc2-1)
console.log(oc2)

occ1 = str.indexOf("this")
occ1 = str.indexOf("this",occ1+1)
console.log(occ1)

let str1 = "samson"
let str2 = "owoeye" 
let str3 = "akinyemi"
  let result = str1.concat(' ',str2)
   console.log(result)
result = result.concat(' ',str3)  
   console.log(result)  

let string = "The brown dog followed the black dog, while the white dog barked at the stray dog chasing the small dog"   
let length = string.length
console.log(length)
console.log(string.charAt(length-1))

string= "the brown dog followed the black dog"

console.log(string.slice(4,7))
console.log(string.slice(-32,-29))
console.log(string.slice(-32,7))
console.log(string.slice(14,36))

console.log(string.substring(7,4))
console.log(string.substring(-11)) 
console.log(string.substring(12,24))
 
