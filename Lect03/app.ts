// console.log("Hello..");

// let firstName: string = "John";
// let lastName: string = "Doe";

// firstName = "Jane";
// age = 30;

// ! Union Types

// function combine(num1: number | string, num2: number | string) {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     result = num1 + num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const sum = combine(5, 10);
// const combinedString = combine("Hello, ", "World!");

// console.log(sum, combinedString);

// ! Literal Types

// function combine(num1: number | string, num2: number | string, convertionType: "as-number" | "as-text") {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number" || convertionType === "as-number") {
//     result = num1 + num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }

// const sum = combine(5, 10, "as-number");
// const sum2 = combine(10, 50, "as-number");
// const combinedString = combine("Hello, ", "World!", "as-text");

// console.log(sum, sum2 combinedString);

// ! Type Aliases / Custom Types
type Combinable = number | string | boolean | string[];
type convertionType = "as-number" | "as-text";
function combinee(
  num1: Combinable,
  num2: Combinable,
  convertionType: convertionType
) {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    convertionType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const sum1 = combinee(5, 10, "as-number");
const sum2 = combinee("10", "50", "as-number");
const combinedString = combinee("Hello, ", "World!", "as-text");

console.log(sum1, sum2, combinedString);

// ! Object Types
type User = {
  name: string;
  age: number;
  skills: string[];
};
const user: User = {
  name: "Shivam",
  age: 22,
  skills: ["JavaScript", "TypeScript"],
};

function greet(user: User) {
  console.log(`Hello I am ${user.name}`);
}
greet(user);
