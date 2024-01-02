//Call Back functions

function myfunc2()
{
    console.log("inside my func2")
}
const myfunc = callback =>
{
    console.log("hello there i am a func and i can ... ")
    callback()
}

myfunc(myfunc2)