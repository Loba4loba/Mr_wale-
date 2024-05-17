// let str = "All boys should be boys and all girls should be girls"
// let str1 = "in the church"
// let str2 = "we should let"


// // let strr = str.split(" ")
// // let strr1 = str1.split(" ")
// // let strr2 = str2.split(" ")


// // // let spliced = strr.splice(3)
// // // let spliced1 = strr.splice(3,2)
// // let spliced2 = strr.splice(3,2,"understand")
// // console.log(spliced2)
// // console.log(strr)

// // let arr1 = [23,'butterfly','moth','caterpillar',1001]
// //  let insect = arr1.splice(2,0,"mosqutoes","beettle")
// //  console.log(arr1)

// // let arr2 = [23,'butterfly','moth','caterpillar',1001]
// //  let insect1 = arr2.splice(2,2)
// //  console.log(arr2)

// // let arr3 = [23,'butterfly','moth','caterpillar',1001] 
// //  let insect2 = arr3.splice(2,1,"ant","bedbug","weevil")
// //  console.log(arr3)





// // strr.push(strr1)
// // strr.unshift(strr2)

// // let firstJoin = strr.join(" ")
// // let secondJoin = firstJoin.split(" ")
// // // let secondJoin1 = secondJoin[0].join(" ")
// // console.log(firstJoin)

// //  function multiplication(num1,num2) {
// //     return num1 * num2
// // }

// // function multiplesOfFiveAndThree(num) {
// //     if(num % 3 === 0 && num % 5 === 0) {
// //     return num + "is divisible of 3 & 5" 
// //     } 
// //     else{
// //         return num + "is not divisible of 3 & 5" 
// //     }
// // }
// // console.log(modulose(15))

// // let date = Date()

// // let date = Date().split(" ")
// // let time = date[4].split(":")
// // let hour = time[0]
// // console.log(hour)

// let name = "Akinyemi Oluwatobiloba"
// let gender = "female"
// function timeGreetingsWithName(name) {
//    let hour = Date().split(" ")[4].split(":")[0]
//    if (hour > 0 && hour <= 12){
//     if(gender === "male"){
//       return "Good Morning Mr".concat(" ",name)
//     }else{
//       return "Good Morning Mrs/Miss".concat(" ",name) 
//     }
//    }
//    else if(hour > 12 && hour <= 18) {
//     if(gender === "male"){ 
//       return "Good Afternoon Mr".concat(" ",name)
//     }else{
//       return "Good Afternoon Mrs/Miss".concat(" ",name)
//     }
//    }
//    else {
//     if(gender === "male"){ 
//       return "Good Evening Mr".concat(" ",name)
//     }else{
//       return "Good Evening Mrs/Miss".concat(" ",name)
//     }
//    }
// }
// console.log(timeGreetingsWithName(name))

/*
write a function (arrow function) that accept a secret number and ask users for guesses
user have a max of five guesses. if user guesses right, print "Haurray!" you guessed  

*/
// let newNUM = 20
// while (newNUM <= 50) {
//   if (newNUM % 3 === 0 && newNUM >= 20){
//      console.log(newNUM)
//   }
//   newNUM++
// }

// const guessingGame = () => {
//   let feedback // make a variable to hold feedback
//   let guess  // make varable to hold users guess
//   let noOfGuesses = 1  // initiate no of attempt to 1
//   let secretNum = Math.ceil(Math.random() * 15) // gives us the secret number
//       guess = Number(window.prompt("guess a number between 0 and 15")) //  to get the number from the user
//    while(noOfGuesses < 5)   {  // first condition if number is less than 5
//    if(guess === secretNum) {
//       feedback = "Hurry! you guessed right."
//       noOfGuesses = 5 // we updtae to attempts to 5 to terminate the loop early
//    }
//    else { 
//       guess = Number(window.prompt("Oh, wrong! Pls guess again...")) // allows user to in put another guess
//       noOfGuesses++ // give count to 5 times
//       if(noOfGuess === 5){ // if all attempt has been used then it gives us feedback
//         feedback = "sorry! you are out of options"
//       }
//    }
//   } return feedback
// }
// console.log(guessingGame())

// Assignment.
 let array = ["thank","God","Almigthy","for","directing","me","to","zulfah","in",2024]
 let cloneArray = []
  function clone(array) {
    for (let i = 0; i <= array.length-1; i++) {
      let array1 = array[i]
      cloneArray.push(array1)
    }
   return cloneArray
  }
console.log(array)

//Assignment 1.
let lastElement = ""
const lastElem = () => {
   let str = array.join(",")
   for (let i = 0; i <= str.length-1; i++) {
       if(str.charAt(i + 1) === "," ){
         lastElement += str.charAt(i)
       }
   }return lastElement 
} 
console.log(lastElem())

//Assignment 2
let num =  56783456     //Number(window.prompt("type 8 digit"))
let newNum = Array.from(String(num), Number)             //String(num).split('')
let number = ""
 
const evenNum = () => {
for(let i = 0; i <= newNum.length - 1; i++) {
    if(newNum[i] % 2 === 0){
     evenNum1 = newNum[i] + "-"
     number += evenNum1
    } 
    else {
      number += newNum[i]
      if (number.endsWith("-") === true){
        number
      }
    }
 } 
 return number
} 
console.log(evenNum())


let arr = ["i","love","abu's","class",]
  
const evenNumm = (arr) => {
  let resArr = []
  arr.forEach((elem, index, arr)=>{
    let strLength = elem.length
    resArr.push(index*strLength)
  } ) 
  return resArr
}
console.log(evenNumm(arr))

let nums = [2,3,3,4,5,6,5]
let val = 3
// const isolateNum = (nums, val) => {
//   let k = 0
//   let num1 = []
//   for(let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val){
//      num1.push(nums[i])
//      k++
//     } 
//  }  
//  return [k,num1]
 
// }
// console.log(isolateNum(nums, val)) 

// let count
// const isolateNum = (nums,val) => {
// nums.forEach((elem, index, arr)=> {
//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i]===val){
//       arr.splice(i,1)
//     }
//     count = nums.length
//     }
//   })
//   return [nums,count]
// }
// console.log(isolateNum(nums, val)) 

// 4. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

let arr1 = ["i","use","to","love","abu's","class","but","i","don't","love","anymore"]
            // [1, 3, 2, 4, 5,5, 3, 1, 5, 4,7]
            // [1, 1, 2, 3, 3,4, 4, 5, 5, 5, 7]
            //  2 2 1 2 3 3 2 2 3 2 1

let arr1LengthIndexs = []

for (let i = 0; i < arr1.length; i++) {
  arr1LengthIndexs.push(arr1[i].length)
}
    for (let j = 0; j< arr1LengthIndexs.length; j++){
      let count = 0
      for (let k = 0; k < arr1LengthIndexs.length; k++ )
      if (arr1LengthIndexs[j] == arr1LengthIndexs[k]){
       count++
    }
    console.log(count)
    }
  
    



    