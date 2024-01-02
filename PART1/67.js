//Sets
//stores data
//No index based access
//unique items only (no duplicates allowed)
//Order is not guaranteed
//Use when values are unique and they are too iterable we can use loops

// const numbers = new Set([1,2,3,4,4]);
// console.log(numbers);
// console.log(numbers[2])

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(['item1','item2']);
// numbers.add(['item3','item4']);
// console.log(numbers.has(1)) // this help to find whether a particular thing is present or not
// // console.log(numbers);

// for(let number of numbers)
// {
//     console.log(number)
// }

const myArray = [1,2,4,4,5,6,5,6]
const uniqueElements = new Set(myArray)
console.log(uniqueElements)
console.log(myArray)

let length = 0;
for(let element of uniqueElements )
{
    length++ ;
}
console.log(length)