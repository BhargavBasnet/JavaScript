function hello()
{
    console.log("hello world")
}
// Javascript ---------> Function + Object

console.log(hello.name) // displays function's name i.e hello

// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

//function provides more useful properties

// function gives us free space i.e object which is called prototype

console.log(hello.prototype) // {}
// only functions provide prototype property.

if(hello.prototype)
{
    console.log("prototype is present")
}
else
console.log("prototype is not present")