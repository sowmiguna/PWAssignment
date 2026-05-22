let arrayValue = ["test","leaf","123","@gmail"]
arrayValue.push("playwright") // add value into last element
console.log(arrayValue)
arrayValue.pop() //remove last value of element
console.log(arrayValue)
arrayValue.shift() //remove first value of element
console.log(arrayValue)
arrayValue.unshift("com") //add the value of 0th index
console.log(arrayValue)
console.log(arrayValue.includes("123"))// to search element is present and return boolean value
console.log(arrayValue.includes(123))
console.log(arrayValue.indexOf("leaf")) // this will find the position of index
console.log(arrayValue.reverse()) // it will reverse the order of the element present
console.log(arrayValue.sort()) // it will arrange the array values as ascending order
console.log(arrayValue.join()) // array values are joined and return a string value/datatype , by default comma is added
console.log(arrayValue.join(" ")) //  it will includes space for each array value and return as a string value