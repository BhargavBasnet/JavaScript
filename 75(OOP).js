const user1 = {
    firstName : "harshit",
    lastName : "Dhakal",
    email : "harshit@gmail.com",
    age:2,
    address:"sachetan marg,baneshwor",
    //about()
    about:function()
    {
        return `${this.firstName} is ${this.age} years old`
    },
    is18()
    {
        return this.age>=18;
    }
}
console.log(user1.about())
console.log(user1.is18())