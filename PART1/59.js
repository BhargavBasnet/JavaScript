//reduce method

const numbers = [1,2,3,4,5,10]



const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},100);
console.log(sum)

//accumulator , currentvalue , return
// 1          ,        2     ,     3
// 3          ,        3     ,     6
// 6          ,        4     ,     10
// 10         ,        5     ,     15
// 15         ,        10    ,     25

const userCart = [
    {productId : 1, productName: "mobile", price : 120000},
    {productId : 2, productName: "phone", price : 140000},
    {productId : 3, productName: "TV", price : 190000},
    {productId : 4, productName: "monitor", price : 1000000},

]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>
{
    return totalPrice + currentProduct.price 
},0)
console.log(totalAmount)