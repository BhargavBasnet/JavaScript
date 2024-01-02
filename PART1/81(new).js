// new keyword

function createUser (firstName,age)
{
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function()
{
    console.log(this.firstName,this.age)
}
const user1 = new createUser("harshit",10);
console.log(user1)