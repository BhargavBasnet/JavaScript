// how to iterate objects

// key le chai agadi ko instances haru lai matra display garxa
// dot Notation or Bracket Notation le chai values haru display gardinxa


const person = {
    name : "ram",
    age : 19,
    "person hobbies" : ["guitar","sleeping","Listening"]
}
for(let key in person) //person ma vako variables haru chai sabai key ma aayera store hunxa
{
   // console.log(person.key) // --->  Displays Undefined values only
//   console.log(person[key])
 // console.log(`${key} : ${person[key]}`)
 //OR
 //console.log(key, ":" , person[key])
 //console.log(key)

}
//console.log(typeof (Object.keys(person)));

// for(let key of Object.keys(person))
// {
// console.log(person[key])
// }

