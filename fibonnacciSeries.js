// // fibonnacci series ?
// let a = 0
// let b = 1
// let c 
// for (i = 0; i <= 10; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c)
    
// }

let str = "example example example"
let basket = ""
for (i = 0; i <= str.length; i++) {
    let str1 = str.charAt(i)
    if(str1 === "a"){
    basket = basket.concat(str1)
    }
}
console.log(basket.length)

// first i would find the lenght of the word
// then fron the number of words then find the intervals by knowing the odd numbers 
// then i would pick ever letter in the odd numbers 
// then i would aff the prefix
// 

let str1 = "example"
let newWord = ""
for (let i= 0; i<= str1.length - 1; i++) {
  if( i % 2 === 0){
   newWord  = newWord.concat("un-", str1.charAt(i)) 
} else{
   newWord  = newWord.concat(str1.charAt(i)) 
}
}console.log(newWord)


let strr = "dodod"
let box = ""
for (let i=strr.length - 1; i >= 0; i--){
  box += strr.charAt(i) 
  if (box == strr){
   console.log(strr.concat(" ","is a palidromic word"))
  }
}

let string = "example example example"
let baff = ""
for (let i = 0; i <= string.length -1; i++) {
   let string1 = string.charAt(i)
  if (string1 === "x"){
   baff = baff.concat(string1)
  } 
}console.log(baff.length)

// 1. Print the numbers 0 - 20, one number per line.
let number = 0
for (let i = 0; i <= 20; i++){
  console.log("number>",i)
 } 

//  2. Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i <= 29; i++) {
  if (i % 2 !== 0){
    console.log("oddNum=>",i)
  }
}

// 3. Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let i = 12; i >= -14; i--) {
    if(i % 2 === 0){
      console.log("evenNum >",i)
    }
}

// 4. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
// let mult3 = ""
for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0){
    // mult3 += i
    console.log("mult3 = ",i)
  }
} 

// 5. Given a string, change every second letter to an uppercase ‘Z’.
let str2 = "youth"
let newStr = ""
for(let i = 0; i < str2.length; i++){
  if (i % 2 !==0){
    newStr += "z"
  } else {
    newStr += str2.charAt(i)
  }
}console.log(newStr)


// 6. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
 if ( str2.includes("y")){
  console.log("yes")
 }
 else {console.log("no")}

//  7. Given any number, write a program to calculate the factorial of the number. 
// (Hint: Factorial is any number multiplied by the natural integers before it up to 1. eg: Factorial of 
//   5 = 5x4x3x2x1)
 let numFac = 10
for (let i = numFac-1; i > 0; i--){
  numFac *= i 
} console.log(numFac)

// 8. Write a program that use a loop to check if a given string is a palindrome. Remember, a palindrome is a 
// word/sentence that spells the same forward and backward.
let work = "poopo"
let work1 = ""
for (let i = work.length - 1; i >= 0; i--){
   work1 += work.charAt(i)}
   if (work1 == work){
    console.log(work1.concat(" ","is a palindrome"))
   } else {
    console.log(work1.concat(" ","is not palindrome"))
   }

// 9. Write a program that finds the summation of every number from 1 to a given number. (Given say, number 5,
//    the summation is 15, ie: 1 + 2 + 3 + 4 + 5)
let num = 10
for (let i = num - 1; i > 0; i--) {
  num += i
 } console.log(num)

//  10. Let's see how your name spells in reverse! 😊eg: tobi  =  Ibot 😎
// Write a program that reverses your name and capitalizes the first letter.
let name = "tobi"
let reverse = ""
for (let i = name.length - 1; i >= 0; i--) {
  reverse += name.charAt(i)
} console.log(reverse.charAt(0).toUpperCase().concat(reverse.slice(1)))

// let numbers = 50
// while (numbers >= 20) {
//   if (numbers % 3 === 0) {
//    console.log(numbers)
//    }
//    numbers--
// }

let newNUM = 20
while (newNUM <= 50) {
  if (newNUM % 3 === 0 && newNUM >= 20){
     console.log(newNUM)
  }
  newNUM++
}