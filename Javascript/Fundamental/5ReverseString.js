//Question : Complete the solution so that it reverses the string passed into it.
// Example 'world'  =>  'dlrow' , 'word'   =>  'drow'

// Sortby : Popularity
// Type : Fundamental
// Difficulty: 8 kyu / easiest


// ANSWER

// bar-bar code
function solution(str){
    let hasilBalik = "";
    for (let i = str.length - 1; i >= 0; i--) {
        hasilBalik = hasilBalik + str[i];
    };
    return hasilBalik;
};

// another bar-bar code
function solution(str) {
    const hasilBalik = [...str].reverse().join("");
    return hasilBalik;
}

// clean code
function solution(str) {
    const hasilBalik = str.split("").reverse().join("");
    return hasilBalik;
}

// more clean code
const solution = str => str.split("").reverse().join("");






