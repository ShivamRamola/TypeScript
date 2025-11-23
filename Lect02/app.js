// Object, Array, Tuple , Enum
//!Object
// const person : {
//   firstName: string;
//   lasName: string;
//   age: number;
//   xyz: {
//     address: string;
//   };
// } = {
//   firstName: "Shivam",
//   lasName: "Ramola",
//   age: 23,
//   xyz: {
//     address: "Uttarkhand, India",
//   },
// };
// console.log(person);
// ! Array
// const person: {
//   firstName: string;
//   lasName: string;
//   age: number;
//   skills: string[];
// } = {
//   firstName: "Shivam",
//   lasName: "Ramola",
//   age: 23,
//   skills: ["JavaScript", "TypeScript", "React"],
// };
// let favoriteLanguage: string[];
// favoriteLanguage = ["Hindi", "English"];
// console.log(person);
// ! Tuple
var person3 = {
    name: "Shivam",
    age: 23,
    skills: ["React", "Python"],
    product: [10, "Mackbook M2 Pro"],
};
person3.product[0] = 5;
// ! Enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
var person4 = {
    name: "Shivam",
    age: 23,
    skills: ["React", "Python"],
    role: "Author",
};
if (person4.role === "Author") {
    console.log("Author");
}
else if (person4.role === "Admin") {
    console.log("Admin");
}
