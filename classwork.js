let str = "javascript javascript javascript"

let trimstr = str.trim()
     console.log(trimstr)
let firstOccOfSpace = str.indexOf(' ')  
     console.log("firstOccOfSpace:",firstOccOfSpace)
let secondOccOfSpace = str.indexOf(' ',firstOccOfSpace+1)     
     console.log(secondOccOfSpace)
let secondOccJavascript = str.slice(firstOccOfSpace+1,secondOccOfSpace)
     console.log(secondOccJavascript)


let trimstrr = str.indexOf("javascript")     
     console.log("trimstrr:",trimstrr)
let trimstrr1 = str.indexOf("javascript",trimstrr+1)      
      console.log("trimstrr1:",trimstrr1) // to know where the first slice 
let lengthOfFirstJavascript = "javascript".length
     console.log("lengthOfFirstJavascript:",lengthOfFirstJavascript) // 
let secondOcc = trimstrr1+lengthOfFirstJavascript  
      console.log("secondOcc:",secondOcc)  // to know where to second slice
   console.log("secondOccOfJavascript:",str.slice(trimstrr1,secondOcc)) 
let secondjava = str.slice(trimstrr1,secondOcc)     
 let toUpperCasef = secondjava.charAt(0).toUpperCase()  
      console.log(toUpperCasef)    


let strr = "javascript is cool"
let firstwith = strr.startsWith("javascript",0)
  console.log(firstwith)
let lengthstrr = strr.length
    console.log(lengthstrr)   
let lastwith = strr.endsWith("cool", 18)      
   console.log(lastwith)  

      //   a correct if statement
    if(lengthstrr === 18){
     console.log('That is the lenght of this string')
    } else{
     console.log('Your code is wrong')
    }

    
let name = "loba4loba"
    if (name === "loba4loba") {
     console.log("baddest confirmation")
    } else{
    console.log("let go there")
    }

let balance = 1000000
let withdrawal = 500000
   if (withdrawal <= balance) {
     balance = balance - withdrawal
     console.log("your new balance is:".concat(" ",balance))} 
     else{"in sufficient balance"
        }   

 let citizenAge = 15 
 if (citizenAge >= 18) {
     console.log("can vote if:".concat(" ",citizenAge))} 
     else{"cant vote"}

