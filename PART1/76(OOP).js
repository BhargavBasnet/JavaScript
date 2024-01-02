
// this is a function which creates object
// then it adds key value pairs
// then it returns object

function createUser(firstName,lastName,email,age,address)
{
    const user = {}
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.age = age
        user.address = address
        user.about = function()
        {
        return `${this.firstName} is ${this.age} years old`
        }
        user.is18 = function()
        {
            return this.age>=18;
        }
        return user;
}

const user1 = createUser ('harshit','dhakal','harshit@gmail.com',17,'mid baneshwor')
console.log(user1)
const is18 = user1.is18()
console.log(is18)
const about = user1.about()
console.log(about)