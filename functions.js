// let arr = [2,4,6,8,10,9,7,5,3,1]

// arr.forEach ((elem,index,arr) => {
//     console.log([elem])
// })


// let mapped = arr.map((elem,index,arr) => {
//    return elem
// }) 
//  console.log(mapped)



// let filtered = arr.filter((elem,index,arr) => {
//      if (index >= 4) {
//         return elem
//     }
//    })
//  console.log("filtered", filtered)


// let finded = arr.find((elem,index,arr) => {
//     if( elem % 2 === 0){
//         return index
//     }
// })
//  console.log("finded", finded)


 
// let arr1 = [2,4,6,8,10,9,7,5,3,1]

// console.log(arr1.sort())

// arr1.sort((a,b) => {
//    return (a - b)
// })
// console.log(arr1)

// let arr1Reduced = arr1.reduce ((accumulator,currValue,currIndex) => {
//   return accumulator + currValue

// } ,2)

// console.log(arr1Reduced)

// const person = {
//     firstName: "ibot",
//     lastName: "sklake",
//     dateOfBirth: "24-12-1989",
//     hobbies: ["gyming","cooking","javascripting"],
//     friends: [{firstName:"Tjay",lastName:"Ragna"},{firstName:"zainab",dateOfbirth:"24-2-1996"}],
// }

// console.log(Object.keys(person)[0])

// let objArray = Object.entries(person) // it would return an array containning an array of keys and value in the object
// console.log(objArray[4][1][1].firstName)


// 1. Write a function `countProperties(obj)` 
// that takes an object `obj` and returns the count of its enumerable 
// properties.


const person1 = {
    firstName: "ibot",
    lastName: "sklake",
    dateOfBirth: "24-12-1989",
    hobbies: ["gyming","cooking","javascripting"],
    friends: [{firstName:"Tjay",lastName:"Ragna"},{firstName:"zainab",dateOfbirth:"24-2-1996"}],
    // individual: function(){return "key:"}
}



const countProperties = (obj) => {
        // Object.defineProperty(obj)
        let per = Object.entries(obj)
       let personIndex = per.map((elem, index, arr) => {
           return elem 
        })
        return personIndex.length
    } 
    console.log(countProperties(person1))


// 2. Implement a function `findLongestKey(obj)` that takes an object `obj` and returns the longest key name 
// present in the object.  

const findLongestKey = (obj) => {
    let per = Object.entries(obj)
       let personIndex = per.map((elem, index, arr) => {
        return elem[0]
})
let sorted = personIndex.sort((a,b) => {
       return a.length - b.length
    })
    return sorted[4]
}
console.log(findLongestKey(person1))


// 3. Create a function `sumObjectValues(obj)` 
// that takes an object `obj` with numeric values and returns the 
// sum of all its values using.

const person2 = {
    name: "Akinyemi Oluwatobiloba",
    accNo: 192828,
    seriaNo: 10,
    dateOfBirth: 24-12-1989,
    policyNo: 90807,
    // individual: function(){return "key:"}
}

const sumObjectValues = (obj) => {
    let count = 0
   Object.values(obj).filter((elem) => {
    if(typeof (elem) === "number") {
        count += elem
    }
})    
return count
} 
console.log(sumObjectValues(person2))


// console.log(Object.getPrototypeOf(person2))
// console.log(Object.PrototypeOf(person2))

// 4. Write a function `mergeObjects() that takes multiple objects and merges them into a single object, 
// giving priority to the properties of the objects specified later in the argument list.

let obj1 = {sex: "male"}
const mergeObject = (obj1,obj2) => {
    Object.assign(obj1, obj2) 
    return obj1
 }
  console.log(mergeObject(obj1,person1))


// 5. Create a function `itsSealed(obj)` 
// that checks whether an object `obj` is sealed using.
//  The function should return `true` if the object is sealed 
// (i.e., prevents new properties from being added and marks all existing properties as non-configurable),
//  otherwise `false`.




// 6. Create a function `createCustomObject(proto, properties)` 
// that takes a prototype object `proto` and an object of properties 
// `properties` and returns a new object with the specified prototype and properties.

const person4 = {
    name: "Akinyemi Oluwatobiloba",
    accNo: 192828,
    seriaNo: 10,
    dateOfBirth: 24-12-1989,
    policyNo: 90807,
    // individual: function(){return "key:"}
}

const greatings = {
    date: Date(),
    great: function () {
        let hour = Object.entries(greatings)[0][1].split(" ")[4].split(":")[0]
         if (hour < 12){
             return "Good Morning"
         }
         else if (hour > 12 && hour <= 17) {
             return "Good Afternoon"
         }
         else {
            return "good Evening"
         }

    }
}

const createCustomObject = (proto, properties) => {
    let merge1 = Object.assign(proto,properties)
    // if(Object.keys(merge1) === "function") {
        //  return  `${merge1.name}, ${merge1.great()}`
      }
    // }
     console.log(createCustomObject(person4,greatings))




// 7. Write a function that takes an array of integers [nums] 
// and a target integer, return indices of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.





//   console.log(Date())

//   const isRaining = (weather) => {
//     return weather < 15 ? console.log("it is raining") : console.log("wear subglass") 
// }  

// let arr = ['eagle','falcon','hawk']
// let arr1 = [...arr1]

let obj = {
    name : "tobi",
    surname : "akinyemi",
    age : 13
}

let objCopy = {category : "human", sciName: "homo sapien", ...obj}
console.log(objCopy)

// THE REST OPERATOR 
let numberArr = [1,2,3,4,5,6,7]
function add (a,b,...num) { // for rest method
    return num.reduce((acc,currValue) => acc + currValue)
}
 console.log(add(...numberArr))

//  destructuring
let numberArr1 = [1,2,3,4,5,6,7]

let [firstNo,secondNo,thirdNo,fourthNo,fifthNo,sixNo,sevenNo] = numberArr1
 console.log(firstNo)
let [firstNo1,,,,,Number] = numberArr1
 console.log(Number)


 const person3 = {
    name: "Akinyemi Oluwatobiloba",
    accNo: 192828,
    seriaNo: 10,
    dateOfBirth: 24-12-1989,
    policyNo: 90807,
    // individual: function(){return "key:"}
}
let {name,accNo,seriaNo,dateOfBirth,policyNo} = person3

// string template litral
let name1 = "alim"
let surname = "alami"
let age = 45

function greet(name,surname,age) {

}