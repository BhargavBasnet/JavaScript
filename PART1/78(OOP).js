// const userMethods = {
//     about :function()
//     {
//     return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function()
//     {
//         return this.age>=18;
//     }
// }
//object ko vitra funtion xa vanney teslai methods vaninxa haiii

function createUser(firstName,lastName,email,age,address)
{
    const user = Object.create(createUser.prototype);
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.age = age
        user.address = address
        return user;
}
createUser.prototype.about = function()
    {
     return `${this.firstName} is ${this.age} years old`
    }
createUser.prototype.about = function()
   {
       return this.age>=18;
   }
   createUser.prototype.sing = function()
   {
    return "lalaalalalallala"
   }
   const user1 = createUser ('Harshit','dhakal','Harshit@gmail.com',17,'mid baneshwor')
   const user2 = createUser ('Harsh','thapa','Harsh@gmail.com',18,'mid baneshwor')
   const user3 = createUser ('Mohit','karki','Mohit@gmail.com',19,'mid baneshwor')
   console.log(user1)



