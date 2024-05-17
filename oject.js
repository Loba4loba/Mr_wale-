const person1 = {
    firstName: "ibot",
    lastName: "sklake",
    dateOfBirth: "24-12-1989",
    hobbies: ["gyming","cooking","javascripting"],
    friends: [{firstName:"Tjay",lastName:"Ragna"},{firstName:"zainab",dateOfbirth:"24-2-1996"}],
     display: function () {return person1.friends[1].dateOfbirth.split("") }
}
let display1 = person1.display()
const selectNum = (display1) => {
for (let i = 0; i< display1.length; i++){
  if (display1[i] === "-"){
    display1.splice(i,1)
  }  
}  return display1
}
console.log(selectNum(display1))


const person = {
    firstName: "ibot",
    lastName: "sklake",
    dateOfBirth: "24-12-1989",
    hobbies: ["gyming","cooking","javascripting"],
    friends: [{firstName:"Tjay",lastName:"Ragna"},{firstName:"zainab",dateOfbirth:"24-2-1996"}],
    // individual: function(){return "key:"}
}
// for (let key in person){
//   console.log("key",":",key,",","value",":",person[key]  )
// }                

// let keyArray = Object.keys(person) // returens all the the object of the key in array form
// console.log(keyArray)  // returens all the the object of the key in array form

// let valueArray = Object.values(person) // returens all the the value of the key in array form
// console.log(valueArray)  // returens all the the value of the key in array form

let objArray = Object.entries(person) // it would return an array containning an array of keys and value in the object
console.log(objArray[4][1][0].firstName)


let product =[ {
  name: "headphone",
  price: 100,
  discount: 0
},
{
  name: "headphone",
  price: 70,
  discount: 0
},
{
  name: "headphone",
  price: 120,
  discount: 0 
}
]

const discountPrice = (product) => {
for(let i = 0; i < product.length; i++){
  if (product[i].price >= 100){
     product[i].discountPrice = product[i].price - product[i].price * 0.1
     product[i].discount = "10%"
  } 
  else {
    product[i].discountPrice = product[i].price - product[i].price * 0.07
    product[i].discount = "7%"
  }
}return product
}
console.log(discountPrice(product))

const confirmDiscount = (obj) => {
  if(obj.discountedPrice) {
    return "already discounted by" + obj.discount * 100 + "%"
  }
}

const individual = (firstName,lastName,dateOfBirth,login) => {
  let newObj = {}
      newObj.firstName = firstName
      newObj.lastName = lastName
      newObj.dateOfBirth = dateOfBirth
      newObj.login = login
      return newObj
}

 let User = individual("ibot","pablo","24-12-1689",function(){return this.firstName})
console.log(User)

// spread operator 
let arr1 = [1,2,3,4,5,[6,7]]

let arr2 = [...arr1]

let cart = {
  items : [
    {
       id: "i102",
       name: "laptop"

    }

  ],
  customer: {

  },
  addItem : function(id, name, price, quantity){
    let item = {id:id, name:name, price:price, quamtity:quantity}
    cart.items.push(item)
  },
  totalPrice: function () {
    let result = cart.items.reduce((acc, currentItem) => {
       return acc + (currentItem.price * currentItem.quantity)
    },0)
    return result
  }
  
}