// ARROW FUNCTIONS

/*
    SYNTAX :-
const function_name = () =>
{
    
}
*/


//Normal Function declaration
function sum1(a,b,c)
{
    return a+b+c
}
const ans1 = sum1(1,2,3)
console.log("Normal function :",ans1)

//Function Expression
const sum2 = function(a,b,c)
{
    return a+b+c
}
const ans2 = sum2(1,2,3)
console.log("Function Expression :",ans2)


//Arrow Function
const sum3 = (a,b,c) =>
{
    return a+b+c
}
const ans3 = sum3(1,2,3)
console.log("Arrow function :",ans3)

// yedi euta matra parameter linxa vanney paranthesis chaidaina
const even = a =>
{
    if(a%2 === 0)
    {
    console.log("even")
    }
    else{
        console.log("odd")
    }
}
even(3);


const isseven = (number) =>
{
    return number%2 === 0
}
console.log(isseven(4));

const iseven = number => number % 2 === 0;
console.log(iseven(2))

