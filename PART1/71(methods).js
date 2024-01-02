// methods
//function inside Objects


const person = {
    firstName : "mohit",
    age : 8,
    about : function()
    {
        //console.log("person name is harshit and person age is 8")
        console.log(`person name is ${this.firstName} and age is ${this.age}`)
         // this vanekai object ho which is person in this case
         console.log(this) // yo garda purai person vitra ko keys and key value pairs print hunxa
         console.log(this.firstName,this.age)
    }
}
// console.log(person.about) Output ----> Returns overall function

person.about(); //output ---- > function vitra ko matra display gardinxa