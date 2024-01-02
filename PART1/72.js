function myFunc()
{
    "use strict" // yo lekhyo vanney chai output ------- > Undefined
    console.log(this) //this will print window object
}
myFunc();