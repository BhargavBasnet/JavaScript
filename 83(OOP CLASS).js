
function CreateUser(firstName,lastName,email,age,address)
{
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.age = age
        this.address = address
}
CreateUser.prototype.about = function()
    {
     return `${this.firstName} is ${this.age} years old`
    }
CreateUser.prototype.about = function()
   {
       return this.age>=18;
   }
   CreateUser.prototype.sing = function()
   {
    return "lalaalalalallala"
   }
   const user1 = new CreateUser ('Harshit','dhakal','Harshit@gmail.com',17,'mid baneshwor')
   const user2 = new CreateUser ('Harsh','thapa','Harsh@gmail.com',18,'mid baneshwor')
   const user3 = new CreateUser ('Mohit','karki','Mohit@gmail.com',19,'mid baneshwor')
   
   for(let key in user1)
   {
    // console.log(key)
   if( user1.hasOwnProperty(key))
   {
    console.log(key)
   }
   }



