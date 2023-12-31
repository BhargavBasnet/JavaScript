//how to clone an array
//how to concatenate two array

let array1 = ["item1","item2","item3"]
//let array2 = ["item1","item2","item3"]
//let array2 = array1.slice(0) // slice le chai 0 index dekhi nai array1 lai 
                            // array2 ma clone gardinxa
//let array2 = [].concat(array1);
let oneMoreArray = ["item8","item9","item10"]

//new way
let array2 = [...array1,...oneMoreArray] // This is called Spread operator
array1.push("item4")
console.log(array1 === array2)
console.log(array1)
console.log(array2)

