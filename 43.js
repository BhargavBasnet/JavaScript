// Nested dstructing

const users = [
    {userId : 1,firstName:'ram', gender:'male'},
    {userId : 2,firstName:'mohit', gender:'male'},
    {userId : 3, firstName:'milan', gender:'male'},
    {userId : 4, firstName:'sam', gender:'male'},
    
]
//const [user1,user2,user3,user4]=users;
const [{firstname : user1firstname}, {gender}]=users
console.log(user1firstname);