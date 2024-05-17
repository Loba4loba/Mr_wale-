// let str = "Abu's assignment"
// let basket =''
// for (let i = 0; i < str.length; i++) {
//      let letter = str.charAt(i)
//      if(letter === "s"){
//      basket = basket.concat(letter)}
// }
// console.log(basket)


// // Loop 1: Print even numbers from 0 to 20 multiplied by 2.
// // Loop 2: Print even numbers from 20 to 0.
// // Loop 3: Subtract numbers from 100 in decreasing order starting from 5.
// // Loop 4: Subtract numbers from 100 in decreasing order starting from 5, but inside the loop.
// // Loop 5: Multiply numbers starting from 1 until the result is greater than or equal to 3, using a while loop.

// let num 
// for (i = 1; i <= 3; i++) {
//      multi = i * 1
//      console.log(">>",multi)
// }

// let evenNo 
// for (i = 0; i < 20; i++) {
//      if(i % 2 === 0){
//       evenNo = i * 2    
//       console.log(evenNo)  
//      }
// }

// let evenNum
// for (i = 20; i > 0; i--) {
//      if(i % 2 === 0){
//       evenNum = i * 2
//       console.log( ">",evenNum )    
//      }
// }
// let subtNu 
//  for(i = 5; i > 0; i--) {
//      if (100 > i){
//       subtNu = 100 - i
//       console.log(subtNu)   
//      }
//  }

// Write a program to print numbers from 1 to 10.
let numb 
for (i = 1; i <= 10; i++) {
     numb = i
     console.log(numb)
}

// Write a program to calculate the sum of first 10 natural number

let sumOfFirst = 0
for (i = 1; i <= 10; i++) {
     sumOfFirst += i
     console.log("sumOfFirst=".concat(sumOfFirst))
     
     }
     


     // Write a program that prompts the user to input a positive integer. It should then 
// print the multiplication table of that number.

let posInt = 3
if (posInt > 0 ) {
  for(i = 0; i <= 20; i++) {
    multip = posInt * i
    console.log(multip)
  }

}

let array1 =  [2,3,3,4,5,6,5]
let arr = ["i","love","abu's","class",]

const sortInDes = (arr) => {
  if (arr[0] === String(arr[0])){
     return arr.sort()
    }
    else { 
      arr.sort((a,b)=>{
        return b-a
      })  
      }
      return arr
  }
  console.log(sortInDes(arr))


//  const sortInDesc = (arr) => {
//    arr.sort((a,b)=> {
//      if(a > b) {
//        return -1
//      }
//      else {
//       return 1
//      }
//    })
//   return arr
//  }
//   console.log(sortInDesc(arr))

  

  //  reduce
  
  // const product = array.reduce((acc,curr,currIndex,arr)=> acc * curr)
  // console.log(product)

  // let avarage = array.reduce((acc,curr,currIndex,arr)=> {
  //  return acc + curr},0)
  //   avarage /= array.length
  //     console.log(avarage)



