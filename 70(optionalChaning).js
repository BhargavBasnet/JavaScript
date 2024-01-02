// Optional Chaining

const user = {
    firstName : "harshit",
    //address : {housenumber:'1234'}
}

// console.log(user.address); // output ---> {housenumber:'1234}
//console.log(user.address.housenumber); // output ---> 1234

//what if address is not defined
//console.log(user.address) output ---- > Reference

// Now using ?.
console.log(user?.address)

