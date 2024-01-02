//getters and setters

class Person{
    constructor (firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    //fullName()
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`
    }
    setName (firstName,lastName)
    {
        this.firstName =firstName;
        this.lastName = lastName
    }
}
const person1 = new Person ("harshit","sharma",19)
//console.log(person1.fullName()) mathi fullName() matra rakhda yo garda vayo

console.log(person1.fullName) // mathi get rakhda aba yo function lai property jasto gari use garna painxa
console.log(person1.lastName)
person1.setName("mohit","dhakal")
console.log(person1.fullName)
