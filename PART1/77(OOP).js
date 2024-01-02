const userMethods = {
    about :function()
    {
    return `${this.firstName} is ${this.age} years old`
    },
    is18 : function()
    {
        return this.age>=18;
    }
}
//object ko vitra funtion xa vanney teslai methods vaninxa haiii

function createUser(firstName,lastName,email,age,address)
{
    const user = {}
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.age = age
        user.address = address
        user.about = userMethods.about; // yo chai reference store gareko haii
        user.is18 = userMethods.is18; // yesle chai methods ko address store garxa
        return user;
}
const user1 = createUser ('Harshit','dhakal','Harshit@gmail.com',17,'mid baneshwor')
const user2 = createUser ('Harsh','thapa','Harsh@gmail.com',18,'mid baneshwor')
const user3 = createUser ('Mohit','karki','Mohit@gmail.com',19,'mid baneshwor')
console.log(user1)
console.log(user2)
console.log(user3)
console.log(user1.about())
console.log(user2.about())
console.log(user3.about())
