// console.log("Lets learn functions in TypeScript");

//! Function return type

function adds(num1: number, num2: number): number {
  return num1 + num2; // return 15
}
adds(5, 10);

function greets(name: string): string {
  return `Hello, ${name}!`;
}
greets("Shivam");

// let combineFunction : Function;
// combineFunction = function (){
// }

// combineFunction = add;
// combine Function = greet;

//console.log(combineFunction(5, 10));

// Good Practices

let combineFunction: (a: number, b: number) => number;

combineFunction = adds;

combineFunction(10, 20);

// Function Types as Callbacks
type CB = (n: number) => void;

function addHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addHandle(10, 20, (result) => {
  console.log(result);
});
