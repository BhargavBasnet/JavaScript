// map method

// const numbers = [3,4,5,6,7]

// const square = function(number)
// {
//     return (number * number) //always use return while using map method
// }

// const squareNumber = numbers.map(square) //Map returns an array
// console.log(squareNumber)

const users = [
    {firstName : "Ram", age:13},
    {firstName : "tam", age:17},
    {firstName : "pam", age:14},
    {firstName : "kam", age:15},
]
const usersNames = users.map((users)=>{
    return users.firstName;
})
console.log(usersNames)