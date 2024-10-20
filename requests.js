const { error } = require("console")
const fs = require("fs")

// fs.writeFileSync("./contacts.txt",'Hello from Vishal Tiwari Contact : 32432423423423')

// //blocking requsts
// console.log("1")
// const result = fs.readFileSync('./contacts.txt','utf8')
// console.log(result)

// console.log("2")


//non-blocking requsts
console.log("1")
fs.readFile("./contacts.txt", "utf-8",(error,result)=>{
console.log(result)
});

console.log("2")
