//Question : In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);
// makeNegative(-5);  
// makeNegative(0);  
// makeNegative(0.12);
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Sortby : Popularity
// Type : Fundamental
// Difficulty: 8 kyu / easiest


// ANSWER

//bar bar code
function makeNegative(num) {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}

// clean code
function makeNegative(num) {
    return num < 0 ? num : -num;
}

// clean code
function makeNegative(num) {
    return -Math.abs(num);
}

// more clean code
const makeNegative = (num) => -Math.abs(num);

// complex code
function makeNegative(num) {
    if (typeof num !== 'number') {
        return 'Inputan / Assigment is not a number';
    } else if (num === 0) {
        return 0;
    } else if (num > 0) {
        return -Math.abs(num);
    } else if (num < 0) {
        return num;
    } else {
        'Nothing there'
    }
}
