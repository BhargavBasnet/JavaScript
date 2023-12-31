//Array Destructing

const myArray = ["value1","value2","value3"]
//let myvar1 = myArray[0]
//let myvar2 = myArray[1]
//console.log(myvar1)
//console.log(myvar2)

let[myvar1, , myvar2] = myArray

let myNewArray = myArray.slice(1) //1 index vanda agadi sabai sliced out
console.log(myNewArray)
console.log(myvar1)
console.log(myvar2)