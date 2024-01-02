// Sort method

// const numbers = [5,9,1200,400,3000] // sort takes this as a strings and sort on basis of ASCII values of first digit
// numbers.sort();
// console.log(numbers)

const letters = ["milan","bahrgav","ram","andey"]
letters.sort();
console.log(letters)

const numbers = [5,9,1200,400,3000] // sort takes this as a strings and sort on basis of ASCII values of first digit
numbers.sort((a,b)=>a-b); // ascending ma a-b ani decending ma b-a
console.log(numbers)

// how this works
/*
1200,410
a - b ------ > 1200-410 -------> postive value -------> suru ma b lai rakhney ani a lai rakhney

5,9
a-b ----> 5-9 ------> negative -------> suru ma a lai rakhney ani b lai rakhney
*/


//Price lowToHigh highToLow

const products = [
    {productId :1, productName: "p1", price:300},
    {productId :2, productName: "p2", price:3000},
    {productId :3, productName: "p3", price:400},
    {productId :4, productName: "p4", price:5500},
]

//lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
});
console.log(lowToHigh)

const highToLow = products.slice(0).sort((a,b)=>
{
    return b.price - a.price;
})

console.log(highToLow)