// Objects Inside Array
//Very useful in real world applications

const users = [
    {userId : 1, firstName:'ram', gender:'male'},
    {userId : 2, firstName:'harry', gender:'male'},
    {userId : 3, firstName:'milan', gender:'female'},
    {userId : 4, firstName:'sam', gender:'female'},

]
for(let user of users)
{
    console.log(user.userId)
}