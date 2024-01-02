// hoisting

// hello()
// function hello()
// {
//     console.log("hello world")
// }

// function declaration ma before initialization hello() access garna milxa

// hello()
// const hello = function()
// {
//     console.log("hello world")
// }

// function expression ma before initialization hello access garna mildaina

// console.log(hello1)
// let hello1 = "hello world";
// console.log(hello1)
// cannot access hello before initialization vanxa in both cases : using let and using const

// But in case of var you can but it displays undefined

console.log(hello)
var hello = "hello world";
console.log(hello)


