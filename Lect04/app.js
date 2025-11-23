// console.log("Lets learn functions in TypeScript");
//! Function return type
function adds(num1, num2) {
    return num1 + num2; // return 15
}
adds(5, 10);
function greets(name) {
    return "Hello, ".concat(name, "!");
}
greets("Shivam");
// let combineFunction : Function;
// combineFunction = function (){
// }
// combineFunction = add;
// combine Function = greet;
//console.log(combineFunction(5, 10));
// Good Practices
var combineFunction;
combineFunction = adds;
combineFunction(10, 20);
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
