// for in loop in array

const fruits = ["apple","mango","grapes","banana"]
const fruits2 = []
for(let index in fruits)
{
    // console.log(index) //gives only index
    console.log(fruits[index].toUpperCase())
}