//clone using Object.assign


const obj = {
    key1 : "value1",
    key2 : "value2"
}

//const obj2 = {...obj} ----> using SpreadOperator you can clone an object
//OR
//You can use Object.assign
const obj2 = Object.assign({},obj)
obj.key3 = "value3"
console.log(obj)
console.log(obj2)

