// const math = require('./math.js')

//import functions from package in current directory
const {add,subtract} = require('./math.js')

//importing package from built in node package
const imp = require('fs')

console.log(imp)
console.log('Hello From Vishaal')
console.log(add)

console.log(subtract(6,7))
