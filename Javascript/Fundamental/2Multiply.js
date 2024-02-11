//Question : This code does not execute properly. Try to figure out why.
// function multiply(a, b){
//     a * b
// }
// Sortby : Popularity
// Type : Fundamental
// Difficulty: 8 kyu / easiest


// ANSWER

// simple code
// function multiply(a, b){
//     return a * b
// }

// compleks code
// const multiply = (a, b) => {
//     if (typeof a === "number" && typeof b === "number") {
//         return a * b;
//     } else {
//         return "Please input numbers";
//     }
// }

// more complex code
// const multiply = (a, b) => {
//     if (typeof a === "number" && typeof b === "number") {
//         return a * b;
//     } else if (typeof a !== "number" && typeof b === "number") {
//         return "Please input a number for the first parameter";
//     } else if (typeof a !== "number" && typeof b !== "number") {
//         return "Please input a number for the second parameter";
//     } else {
//         return "Please input numbers";
//     }
// }

// simple and clean code
const multiply = (a, b) => a * b;



