let string= "the brown dog followed the black dog on the street"

let occ1 = string.indexOf("dog")
occ1 = string.indexOf("dog",occ1+1)
let occ2 = string.slice(33,36)
console.log(occ2)
occ1 = string.replace(occ2,"cow")
console.log(occ1) // i dont know why this didnt work sir   


let str = "  The morning is upon us  "
  let trimstr = str.trim() 
     console.log(trimstr)
  trimstr = trimstr.substring(3,12)
     console.log(trimstr)

let str1 = "The quick brown fox jumps over the lazy dog"
  let lengthOfstr = str1.length
     console.log(lengthOfstr) //to find the lenght
  let extractionOfJump = str1.indexOf("jumps")
     console.log(extractionOfJump) // using this result to kmow when to beging the exraction
  extractionOfJump = str1.substring(extractionOfJump,lengthOfstr)    
     console.log(extractionOfJump)
let str2 = extractionOfJump+','+' '+"The quick brown fox."    
    console.log(str2)

let str3 = "  The brown fox "
  let trimstr3 = str3.trimEnd()
    console.log(trimstr3)        
    console.log(trimstr3.includes("o"))
    
let str4 = "abcdefg"
  let extn1 = str4.substring(0,1)
  let extn2 = str4.substring(2,3)
  let extn3 = str4.substring(4,5)
  let extn4 = str4.slice(6,7) 
  str4 = extn1+extn2+extn3+extn4
    console.log(str4)

let str5 = "example example example"
  let str5occ1 = str5.indexOf("example")     
  let str5occ2 = str5.indexOf("example",str5occ1+1)
    console.log(str5occ2) // to know where to begin the slice
  let str5occ3 = str5.lastIndexOf("e") 
  let str5occ4 = str5.lastIndexOf("e",str5occ3-1)  
  let str5occ5 = str5.lastIndexOf("e",str5occ4-1)
    console.log(str5occ5) // to know where to end the slice
  let str6occ1 =  str5.slice(str5occ2,str5occ5+1)
  console.log(str6occ1)  
 
let str6oc1 = str6occ1.indexOf("l") 
   str6oc1 = str6occ1.charAt(str6oc1) 
let str6oc2 = str6occ1.indexOf("a")
   str6oc1 = str6occ1.charAt(str6oc1) 
let str6oc3 = str6occ1.indexOf("m")
let str6oc4 = str6occ1.indexOf("p")
  let str6oc = str6oc1+str6oc2+str6oc3+str6oc4
    console.log('>',str6oc)






let str6 ="  Hello, World!  "
  let trimstr6 = str6.trim()  
    console.log(trimstr6)
  trimstr6 = trimstr6.length-1
    console.log(trimstr6)  
    
let str7 = "Hello, World!"    
  let indexstr7 = str7.indexOf("World")
  let lengthstr7 = str7.length-2
    console.log(str7.slice(indexstr7,lengthstr7+1))  

let S = "i love damilola"    
  let indexOfS = S.indexOf("damilola")
  let indexOfS1 = S.lastIndexOf("a")
  let LastWord = S.slice(indexOfS,indexOfS1+1)
    console.log(LastWord )
  let lengthOfLastWord = LastWord.length
    console.log(lengthOfLastWord)  // Explanation: The last word is "damilola" with length 8.

