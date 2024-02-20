// Question : Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Sortby : Popularity
// Type : Fundamental
// Difficulty: 8 kyu / easiest


// ANSWER

// bar-bar code
function boolToWord(bool) {
    if (bool) {
        return "Yes";
    } else {
        return "No";
    }
}

// clean code
function boolToWord(bool){
    return bool ? "Yes" : "No";
}

// more clean code
const boolToWord = (bool) => bool ? "Yes" : "No";