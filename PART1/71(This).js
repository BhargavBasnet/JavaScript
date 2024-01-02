//Methods

function personInfo()
{
    console.log(`person name is ${this.firstName} and person age is ${this.age}`)
}
const person1 = {
    firstName : "harsh",
    age : 9,
    about : personInfo
}
const person2 = {
    firstName : "harshshit",
    age : 10,
    about : personInfo
}
const person3 = {
    firstName : "Ram",
    age : 11,
    about : personInfo
}
person1.about();
person2.about();
person3.about();

