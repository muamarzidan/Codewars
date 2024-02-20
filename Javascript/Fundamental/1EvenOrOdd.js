// Question : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Sortby : Popularity
// Type : Fundamental
// Difficulty: 8 kyu / easiest


// ANSWER

// bar bar code
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// simple code
function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// more clean code
const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd"; 