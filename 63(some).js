// some method

// const numbers = [3,5,8,9]

// const ans = numbers.some((number)=> number%2===0)
// console.log(ans)

//kunai na kunai chai even number hunu paryo ani true return gardinxa navaye false

const userCart = [
    {productId :1, productName: "p1", price:300},
    {productId :2, productName: "p2", price:3000},
    {productId :3, productName: "p3", price:400},
    {productId :4, productName: "p4", price:5500},
]

const ans = userCart.some((cartItem)=>cartItem.price>5000);
console.log(ans)