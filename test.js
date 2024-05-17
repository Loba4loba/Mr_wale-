// const person4 = {
//     name: "Akinyemi Oluwatobiloba",
//     accNo: 192828,
//     seriaNo: 10,
//     dateOfBirth: 24-12-1989,
//     policyNo: 90807,
//        greet:{
//             date: Date(),
//             great: function () {
//                 let hour = Object.entries(greatings)[0][1].split(" ")[4].split(":")[0]
//                  if (hour < 12){
//                      return "Good Morning"
//                  }
//                  else if (hour > 12 && hour <= 17) {
//                      return "Good Afternoon"
//                  }
//                  else {
//                     return "good Evening"
//                  }
//                 }

//         }
//     }

// console.log(person4.name)


// const sayHello = (obj) => {
//     let answer
//     for(let i = 0; i< Object.keys(obj).length; i++){
//    if( Object.values(obj)[i] == "function"){
//       answer = obj[i]
//    }
//   }
//   return answer
// }
// console.log(sayHello(person4))

// let test = [ 'name', 'accNo', 'seriaNo', 'dateOfBirth', 'policyNo', 'greet' ]
// console.log(test[1])





//    }
//    console.log(obj)

   // // Object.freeze(create1)
// // let obj = Object.isFrozen(create1)
// // // console.log(obj)


// const greet = (obj) => {
//    let target = {}
//    let ent = Object.assign(target,obj)
//    let ent1 = Object.keys(ent)
//    let check 
//    for(let i = 0; i < ent1.length; i++){
//     //   ent1[i][0] === "g" ? `${person4.name} , ${person4.great()}`: "continue"
//     }
// //    }
//        return check                               //? `${name} , ${great}`: "continue"
// } 
//  console.log(greet(person4))



// let num = [1,2,3,4,5,6]

//  const fun = (num) => {
//  for (let i=0;i<num.length;i++){
//     return num[i]
//  }
//  } 
//  console.log(fun(num))


//  let numbers = [11, 2, 4, 5, 3, 8, 23, 45, 43, 76, 54, 83]
// const genratePrime = (arr) => {
//     return arr.filter((ele) => {
//         let prime = true
//         for (let i = 2; i < ele; i++) {
//             if (ele % i === 0) {
//                 prime = false
//                 // console.log("is not prime ", ele)
//             }
//         }
//         if (prime) return true
//     })
// }

// console.log(genratePrime(numbers))


// let s = 'abcabcbb'
// let split1 = s.split("")
// let max = 0
// // let lengthOfString = ''
//  for(let i = 0; i < split1.length; i++){
//      let firstInt= "";
//      firstInt += split1[i]
//            for(let j = 0; j < split1.length; j++){
//           if (firstInt.includes(split1[j])) break;
//               else firstInt += split1[j]
//            }
//     if (firstInt.length > max) {
//         max = firstInt.length
//     }      
//          }

// console.log(max)


// const romanNumber = (str) => {
//     let romanNum = {
//         "I":     1,
//         "V":     5,
//         "X":     10,
//         "L":     50,
//         "C":     100,
//         "D":     500,
//         "M":     1000
//     }
//     let splitted = str.split("")
//     let result = 0                                          // [M,C,M,X]
    
//      for (let i = 0; i < splitted.length; i++) { 
//        if(romanNum[splitted[i]] < romanNum[splitted[i + 1]]){
//             result += romanNum[splitted[i + 1]] - romanNum[splitted[i]]

//             i++
//        }else{
//         result+= romanNum[splitted[i]]
//        }
               
//      } 
//      return result

// }                      
// console.log(romanNumber('MCMX'))

        
        
// M, C, M, X

// let str = 'qweqrfdsewqa'
// const lenghtOfLongestSubString = (string) => {
//     let s = ""
//     let answer = ''
//     for(let i = 0; i< string.length; i++){
//         if (s.includes(string[i]) === false){
//             s += string[i]       
//         }
//         else {
//            s = s.slice(s.indexOf(str[i])+1)
//            s += str[i]
//         }
//     }
//     if (string.length > s.length){
//         answer = s
//     }
//     return `${answer}`
// } 
// console.log(lenghtOfLongestSubString(str))

// let numberArr1 = [1,2,3,4,5,6,7]
// let [firstNo,secondNo,thirdNo,fourthNo,fifthNo,sixNo,sevenNo] = numberArr1
// console.log(firstNo)
// let [firstNo1,,,,,,Number] = numberArr1
// console.log(Number)



//  fetch("https:dummyjson.com/products")
//   .then((result)=>result.json()) // note that json also return a promise
//   .then((result2)=> {
// let productName = result2.products[0].title.concat(' ',result2.products[0].description)
// console.log(productName)

// let productName1 = result2
// let max1 = []
// let obj 
// // console.log(productName1.products[1].price)
// for(let i = 0; i < productName1.products.length; i++){
//     max1.push(productName1.products[i].price)
// if(productName1.products[i].price === Math.min(...max1)){
//    obj = productName1.products[i]
// }
   
// } 
// console.log(obj)
// })




// fetch()                         //callName((parameter) res: any)
// .then(()=>{})                   //.then(res => console.log(res))
// .then(() => {})                 //.catch(error => console.log(error))

// const callName = (name) => {
//     return new Promise((resolve,reject) => {
//         if(name === "teejay"){
//             resolve (name)
//         }
//         else {
//             reject (`name is not teejay`)
//         }
//     })
// }
// callName("loba")
// .then(res => console.log(res))
// .catch(error => console.log(error))

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous 
// value every subsequent time it is called (n, n + 1, n + 2, etc).



// const BellRinger = (Ring) => {
//     return new Promise((resolve,reject) => {
//         if (Ring.includes('calls') === true){
//             resolve (Ring.length)
//         } else {
//             reject ("continue")
//         }
//     })
// }
// BellRinger(["calls","calls","calls"])
// .then(res => console.log(res))
// // .catch(res1=> console.log(res1)) 
// //     let answer = "n" 
// //    for(let i = 0; i < res-1; i++){
// //     if (Ring.length === res){
// //       answer += '+', [i]
// //           }
// // //       console.log(answer)
// //    }
  


const getProduct1 = async () => {
    try{const res = await fetch ("https://dummyjson.com/products")
        const data = await res.json 
        console.log 
    }
    catch (error){
        return error.message
    }
}

const group =(a,b) => {
  let num = []
  let count = Math.floor(a / b)
  for(let i = 0; i < b; i++){
     num.push(count)

  }
  return num
}
console.log(group(10,6))