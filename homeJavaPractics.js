let studentGender = "male"
let studentAge = 5
let name = "damilola"
if (studentGender === "male" && studentAge >= 5) {
     console.log("male student above 5years")
         if (studentAge >= 5 && studentAge < 10) {
        console.log("mim student name=".concat(" ",name," ",studentAge))
         } else if (studentAge >= 10 && studentAge < 15) {
        console.log("seniour student name=".concat(" ",name," ",studentAge))    
         } else if (studentAge >= 15 && studentAge < 20) {
        console.log("max student name=".concat(" ",name," ",studentAge))      
         } else {console.log(" male teachers name=".concat(" ",name," ",studentAge))}
} 
else if (studentGender === "female" && studentAge >= 10) {
    console.log("female student above 10years")
     if (studentAge >= 10 && studentAge < 15) {
    console.log("female student name=".concat(">",name," ",studentAge))    
     } else if (studentAge >= 15 && studentAge <20) {
    console.log("female student name=".concat(" ",name," ",studentAge))    
     } else if (studentAge >= 20 && student < 25) {
    console.log ("female student name=".concat(" ",name," ",studentAge))    
     } else {console.log(" female teachers name=".concat(" ",name," ",studentAge)) }
    
}
else {(console.log("not a student"))}

let str = "java and JavaScript are not the same"
    str1 = str[0].toUpperCase() + str.slice(1)
      console.log(str1)
    str2 = str[5].toUpperCase() + str.slice(6)
    str = str1.slice(0,5).concat(str2)
      console.log(str)
    str3 = str[20].toUpperCase() + str.slice(21)
    str = str.slice(0,20).concat(str3)
      console.log(str)
    str4 = str[24].toUpperCase() + str.slice(25)
    str = str.slice(0,24).concat(str4)
       console.log(str)
    str5 = str[28].toUpperCase() + str.slice(29)
    str = str.slice(0,28).concat(str5)
       console.log(str)  
    str6 = str[32].toUpperCase() + str.slice(33)
    str = str.slice(0,32).concat(str6)  
       console.log(str)


let Num1 = 5
let Num2 = 2
let Num3 = 3       
if (Num1 > Num2 && Num1 > Num3 ) {
  console.log(Num1 + " is the largest number.")
} else if 
   (Num2 > Num1 && Num2 > Num3) {
  console.log(Num2 + " is the largest number.")
} else if 
   (Num3 > Num1 && Num3 > Num2) {
   console.log(Num3 + " is the largest number.") 
   } 

 
let workdays = 4
let Weekend = 2
let Var2 = "HolidayWeekend"
let Var4 = "HolidayWeekDays"
 if (workdays < 5 &&  Weekend > 2) {
     console.log("Weekend is public holiday")
}
 else if (workdays === 5 && Weekend === 2) {
     console.log("Weekend is Regular weekend")
 }
 else if (workdays < 5) {
     console.log("weekday holiday")
 }

let salary = 1000000
let staffYear = 1
let increase = 0.05
 if (staffYear >= 10) {
    percentageIncrease = salary * 0.05
    increase = percentageIncrease + salary
    console.log("staff entiteld salary:".concat(" ",increase))
 }
 else if (staffYear < 10){
  console.log("staff entiteld salary:",salary)
 }

 let discount = 0.1
 let quantity = 100
 let cost = 500
 if (quantity >= 1000) {
   discountPrice = cost - discount
   totalCost = quantity * discountPrice 
   console.log("cost for discount price:".concat(" ",totalCost))
 }
 else if (quantity < 1000) {
   CostPrice = quantity * cost
   console.log("cost for price:".concat(" ",CostPrice))
 }

 let side1 = 40
 let side2 = 40
 let side3 = 40
 if (side1 === side2 && side1 === side3 && side2 === side3) {
   console.log("it is an Equilateral triangle.")
 }
 else if (side1 === side2 || side1 === side3 || side2 === side3) {
   console.log("is it an Isosceles triangle.")
 }
 else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
   console.log("it is an Scalene triangle.")
 }

let num1 = 19
const num2 = 7
if (num1 % num2 === 0) {
   console.log("is a buzz number")
}
else if (num1 % num2 !== 0) {
   console.log("is not a buzz number")
}
