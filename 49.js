 //lexical Scope

const myvar = "value1"

function app()
{
    //const myvar = "value1"
    const myfunc = ()=>
    {
       // const myvar = "vlaue59"
       const myfunc3 = () =>
       {
        console.log("inside myfunc" , myvar)
       }
        myfunc3()
    }
    const myfunc2 = function()
    {


    }
    console.log(myvar)
    myfunc()
}
app()