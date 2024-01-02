//splice method
//start,delete,insert
const myArray = ['item1','item2','item3']

//delete

// myArray.splice(1,1); //start from index 1 and delete 1 element vaneko ho hai (start,delete,insert)
// console.log(myArray)


//insert
myArray.splice(1,0,"inserted item")
console.log(myArray)