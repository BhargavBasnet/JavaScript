// Important Array Methods

const numbers = [4,2,5,8]

// function myFunc(number,index)
// {
//     console.log(`index is ${index} number is ${number}`)
// }

// for(let i=0; i<numbers.length ; i++)
// {
//     myfunc(numbers[i],i)
// }

// numbers.forEach(function(number,index)
// {
//     console.log(`index is ${index} number is ${number}`)
// });

// numbers.forEach(function(number,index)
// {
//     console.log(number*3,index)
// })

const users = [
    {firstName : "Ram", age:13},
    {firstName : "tam", age:17},
    {firstName : "pam", age:14},
    {firstName : "kam", age:15},
]
// users.forEach(function(user)
// {
//     console.log(user.firstName)
// })

for(let user of users)
{
    console.log(user.firstName)
}

