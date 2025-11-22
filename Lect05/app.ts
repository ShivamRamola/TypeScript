// console.log("Lets learn functions in TypeScript");

let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 10;
userName = "Shivam";

userName = userInput;

if (typeof userInput === "string") {
  userName = userInput;
}

// never return type
function generateError(message: string, code: number) {
  throw { message: message, statusCode: code };
}
const res = generateError("Internal server error", 500);
console.log(res);
