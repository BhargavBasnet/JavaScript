//every method

// const numbers = [2,4,6,8,10]
// const ans = numbers.every((numbers)=>numbers%2===0)
// console.log(ans)

const userCart = [
    {productId :1, productName: "p1", price:300},
    {productId :2, productName: "p2", price:3000},
    {productId :3, productName: "p3", price:400},
    {productId :4, productName: "p4", price:5500},
]

const ans = userCart.every((cartItem)=>cartItem.price<30000);
console.log(ans)
