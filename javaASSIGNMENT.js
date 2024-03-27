// assignment No1
let fig1 = -7
const fig2 = 0
if (fig1 > fig2) {
  number =  fig1 + fig2 
  console.log("positive number=".concat(" ",number)) // to give comfirm if positive
}
 else if (fig1 === fig2) {
   number = fig1 + fig2 
   console.log("nutral=".concat(" ",number)) // to comfirm if nutral
 }
 else if (fig1 < fig2) {
    number = fig1 + fig2
    console.log("negative number=".concat(" ",number)) // to comfirm if negative
 }
 else (console.log("move on"))



 // assignment No2
let figg1 = 3
const figg2 = 2
 if (figg1 % figg2 === 0) {
    console.log("Even number=",figg1)
 }
 else if (figg1%figg2 === 1) { 
    console.log("Odd number=",figg1)
 } 
 else (console.log("carry go"))

 
 
 // assignment No3
 let MultipleOfNumbers = 2
 const MultipleOf5 = 5
 const MultipleOf3 = 3
 if (MultipleOfNumbers % MultipleOf5 === 0) {
   console.log("MultipleOf5=".concat(" ",MultipleOfNumbers))
 }
 else if (MultipleOfNumbers % MultipleOf3 === 0) {
    console.log("MultipleOf3=".concat(" ", MultipleOfNumbers))
 }
 else ( console.log("NeitherOfAny=",MultipleOfNumbers))



 // assignment No4
let year = 2000
const century20 = 1901
const century21 = 2001
const century22 = 2101
 if (year >= century20) {
    console.log("20century=".concat(" ",year))
 }
 else if (year >= century21) {
    console.log("21century=".concat(" ",year))
}
 else if (year >= century22) {
    console.log("22century=".concat(" ",year))
 }
 else (console.log("get on"))


 let value = 5
 let result = 0
 
 if (value < 10) {
     result = 0
     console.log("result=",0)
 } else if (value >= 10 && value <= 50) {
     result = 1;
     console.log("result=",1)
 } else if (value >= 51 && value <= 100) {
     result = 2;
     console.log("result=",2)
 } else {
     result = 3; 
     console.log("result=",3)
 }