//Difference between dot and bracket notation

const key = "email";
const person = {
    name:"ram",
    age:22,
    "person hobbies" : ["guitar","music","sports"]
}
console.log(person["person hobbies"])
person[key]="email@gmail.com"
console.log(person)
