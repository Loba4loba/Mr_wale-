//firstName=a, surName=b, otherName=c, age=d, 'text about me'=e
let a = "oluwatobiloba"
let b = "akinyemi"
let c = "damilola"
let d = "34"
let e = "my names are akinyemi oluwatobiloba damilola are my names"


console.log(a[0],".",b[0],".",c[0])
//console.log(a[0]) // same as console.log(a.charAt(0))
//console.log(a.charAt(a.length-1))
//console.log(a[a.length-1])
//console.log(a.charAt(0)+b.charAt(0)+c.charAt(0))
//console.log(a[0]+" "+b[0]+" "+c[0]) // make the first charater of each variable come togther
//console.log(a[a.length-1]+b[b.length-1]+c[c.length-1]) // make the last charater of each variable come togther
//console.log(a.concat(' ','love\'s',' ',b))
//console.log(e.indexOf("are",))
//console.log(e.indexOf("are",10))
//console.log(e.lastIndexOf("are"))
//console.log(e.startsWith("o"))

let str = "Hello, world! how are you?"
let occ1 = str.indexOf("o");
 console.log(occ1)
let occ2 = str.indexOf("o", occ1 + 1)
 console.log(occ2)

let str1 = "zulfah"
let str2 = "rosh" 
let str3 = "lekan"
  
 let result = str1.concat(' ',str2)
console.log(result)

 result = result.concat(' ',str3) // here we are had to update the variable "result" 
console.log(result) 
  
let srt4 = "The brown dog followed the black dog, while the white dog barked at the stray dog chasing the small dog"

console.log(srt4.charAt(srt4.length-1))


 let lastIndex = srt4.lastIndexOf("dog")
 console.log(lastIndex)
 
 let secondToLast = srt4.lastIndexOf("dog",lastIndex-1)
 console.log(secondToLast)

 let thirdToLast = srt4.lastIndexOf("dog",secondToLast-1)
 console.log(thirdToLast)
  