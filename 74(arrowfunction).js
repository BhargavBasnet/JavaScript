// Arrow functions
// arrow functions ma afnai this keyword hudaina haiii
// this afno surrounding bata linxa 

const user1 = {
    firstName:"harshit",
    age:10,
    about: ()=>
    {
        console.log(this.firstName,this.age)
    }
}
user1.about(user1)