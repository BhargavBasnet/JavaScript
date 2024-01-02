// rest parameter

// const myfunc = (a,b,c) =>
// {
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myfunc(1,2,3,4,5,6,7,8)

// yesma ta 1,2,3 matra values a,b,c ma store huney vayo haina
// so use rest parameteres ...

// const myfunc = (a,b,...c) =>
// {
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }
// myfunc(1,2,3,4,5,6,7,8)

const addAll = (...numbers) =>
{
    let total = 0;
    for(let number of numbers)
    {
        total = total + number;
    }
    return total
}
const ans = addAll(1,2,3,4,5,6,7,8)
console.log(ans)
