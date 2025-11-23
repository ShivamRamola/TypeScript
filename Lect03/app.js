// console.log("Hello..");
function combinee(num1, num2, convertionType) {
    var result;
    if ((typeof num1 === "number" && typeof num2 === "number") ||
        convertionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combinee(5, 10, "as-number");
var sum2 = combinee("10", "50", "as-number");
var combinedString = combinee("Hello, ", "World!", "as-text");
console.log(sum1, sum2, combinedString);
var user = {
    name: "Shivam",
    age: 22,
    skills: ["JavaScript", "TypeScript"],
};
function greet(user) {
    console.log("Hello I am ".concat(user.name));
}
greet(user);
