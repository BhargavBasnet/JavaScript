
//Nested if else

let winningNumber = 12;
let userGuess = +prompt("Guess a number") // always take input in string
//console.log(typeof userGuess , userGuess);

if(userGuess === winningNumber)
{
    console.log("wright")
}
else if (userGuess <= winningNumber)
{
    console.log("less")
}
else if(userGuess >= winningNumber)
{
    console.log("high")
}
else
{
    console.log("bye")
}


