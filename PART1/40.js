//SPREAD OPERATOR

const array1 = [1,2,3]
const array2 = [4,5,6]

const newArray = [...array1,...array2]
const newArray1 = [...array1,...array2,7,8,9]
const newArray2 = [..."abc"]
const newArray3 = [..."1234566"]
console.log(newArray)
console.log(newArray1)
console.log(newArray2)
console.log(newArray3)

//Spread operator in objects

const obj1 = {
    key1 : "value1",
    key2: "value2",
}
const obj2 = {
    key1 :"valueUnique", //Overwrite gardinxa
    key3 : "value3",
    key4 : "value4"
}
const newObject = {...obj1,...obj2, key69: "value69"}
const newObject1 = {..."abcdefghijklmnopqrstuvwxyz"}
console.log(newObject)
console.log(newObject1)