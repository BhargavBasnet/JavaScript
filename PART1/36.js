// Objects are reference type
//arrays are good but not sufficient

const person = {
    name:"ram",
    age:22,
    hobbies : ["guitar","music","sports"]
}
//console.log( person)
//console.log(typeof person)

//how to access data from objects
//console.log(person.name)
//console.log(person.age)
//console.log(person.hobbies)
console.log(person["name"])  //Bracket Notation


//how to add key value pair to objects
person.gender ="male"
person["person"]="male"
console.log(person.gender)