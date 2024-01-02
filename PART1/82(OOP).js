
function createUser(firstName,lastName,email,age,address)
{
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.age = age
        this.address = address
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
   const user1 = new createUser ('Harshit','dhakal','Harshit@gmail.com',17,'mid baneshwor')
   const user2 = new createUser ('Harsh','thapa','Harsh@gmail.com',18,'mid baneshwor')
   const user3 = new createUser ('Mohit','karki','Mohit@gmail.com',19,'mid baneshwor')
   console.log(user1)



