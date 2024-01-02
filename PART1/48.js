// Functions inside function

const app = () =>
{
    const myfunc = () =>
    {
        console.log("hello from myfunc")
    }
    const add = (num1,num2) =>
    {
        return num1+num2;
    }
    const mul = (a,b) => a*b;
    
    console.log("Inside app");
    myfunc()
    console.log(add(1,1))
    console.log(mul(2,2))
}
app()