function add(a,b,c)
{
    //console.log(2+4)
    return a+b+c
}
//console.log(add(4,5,5))

// function even(a)
// {
//     if(a%2===0)
//     {
//         console.log("even")
//     }
//     else
//     console.log("odd")
// }
// even(2)

function array(guess)
{
    let array1 = [1,2,3,4,5]
    for (let i=0;i<array1.length;i++)
    {
        if(guess === array1[i])
        {
            console.log(`the index of your guessed number ${guess} is : `+i)
        }
    }
}
array(3)