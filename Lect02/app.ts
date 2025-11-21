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

const person3: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string]; // fixed array of two elements
} = {
  name: "Shivam",
  age: 23,
  skills: ["React", "Python"],
  product: [10, "Mackbook M2 Pro"],
};

person3.product[0] = 5;

// ! Enum

enum Role {
  Admin,
  Author,
  User,
}
const person4 = {
  name: "Shivam",
  age: 23,
  skills: ["React", "Python"],
  role: "Author",
};

if (person4.role === "Author") {
  console.log("Author");
} else if (person4.role === "Admin") {
  console.log("Admin");
}
