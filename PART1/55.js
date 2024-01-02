// Function returning function

function myfunc()
{
    function hello()
    {
        console.log("hello world")
    }
    return hello();
}
// console.log(myfunc())
myfunc()