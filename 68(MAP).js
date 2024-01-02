//Maps
//map is an iterable
//stores data in ordered fashion

//store key value pair (like object)
//duplicate keys are not allowed like bjects

//difference between maps and object
//objects can have only string and symbols as key whereas in map you can use anything as key like array,number,string

//object literal
// key ------> string
// key -------> symbol
// const person = {
//     firstName : "ram",
//     age : 7
//    // 1 : "one"
// }
// console.log(person.firstName)
// console.log(person["firstName"])
// //console.log(person[1])

//key value pair

// const person = new Map()
// person.set('firstName','ram') // add garna ko lagi use set
// person.set('age',7)
// person.set(1,'one')
// console.log(person)
// // console.log(person.firstName) //you cannot access keys lai this
// // console.log(person['firstName']) // you can also not this way

// // in order to access the keys we use get
// console.log(person.get('age')) 
// console.log(person.keys()) 

/************************** REAL WORLD EXAMPLE ***********************************/
const person1 = {
    id :1,
    firstName : "harshit"
}
const person2 = {
    id :3,
    firstName : "harsh"
}
console.log(person1)

const extraInfo = new Map()
extraInfo.set(person1, {age:8,gender:"male"})
extraInfo.set(person2, {age:9,gender:"male"})
console.log(extraInfo)

console.log(person1.id)
console.log(extraInfo.get(person1).gender)
console.log(extraInfo.get(person2).gender)

