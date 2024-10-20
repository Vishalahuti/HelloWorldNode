// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

//expoting the functions as publicly available
module.exports= {
    add: add,
    subtract: subtract
};

//alternate way to import the functions
// exports.add = (a,b) => a+b
// exports.subtract = (a,b) => a-b