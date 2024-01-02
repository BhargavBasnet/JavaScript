//find method

// const myArray = ["hello",'cat','dog','lion']
// function islength3(string)
// {
//     return string.length ===3 ;
// }
// const ans = myArray.find(islength3)
// console.log(ans)


const users = [
    {firstName : "Ram", age:13, userId : 1},
    {firstName : "tam", age:17 ,userId : 2},
    {firstName : "pam", age:14 ,userId : 3},
    {firstName : "kam", age:15 ,userId : 4},
]

const myUser = users.find((user)=>user.userId===3)
console.log(myUser)