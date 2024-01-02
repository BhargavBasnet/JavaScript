// Param destructuring

const person = {
    name : "ram",
    age : 22,
    gender : "male"
}
 function printdetails({name , age , gender})
 {
    console.log(name)
    console.log(age)
 }
 printdetails(person)