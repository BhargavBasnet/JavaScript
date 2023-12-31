// PRIMITIVE VS REFERENCE DATATYPE

/*Primitive dataType:-
let num1 = 3;
let num2 = num1;
console.log(num1)
console.log(num2)
num1++
console.log("After incrementing value of num1")
console.log(num1)
console.log(num2)
*/

/*******Reference DataType *******************/

let array1 = ["item1","item2","item3"]
let array2 = array1;
console.log(array1)
console.log(array2)

console.log("after pushing item4 to array1")
array1.push("item4")
console.log(array1)
console.log(array2)

