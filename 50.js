// block scope vs function scope

//let and const are block whereas var is function scope

// {
//     let name = "ram"
//     console.log(name)

// }
// {
//     let name = "mohit"
//     console.log(name)
// }

/*
{
    let name = 'ram'
}
console.log(name)
*/
//you cannot access elements outside the block

// { 
//     var name = 'ram'
//     console.log(name)
// }
// {
//     console.log(name)
// }

const myapp = () =>
{
    if(true)
    {
        let firstname = "ram"
        console.log(firstname)
    }
    console.log(firstname)
}
myapp()
