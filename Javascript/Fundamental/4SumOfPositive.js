//Question : You get an array of numbers, return the sum of all of the positives ones.

// Example [1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// ANSWER

// clean code
function positiveSum(arr) {
    return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}

// bar-bar code
function positiveSum(arr) {
    let hasil = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            hasil += arr[i];
        }
    }
    return hasil;
}
// another bar-bar code
function positiveSum(arr) {
    let hasil = 0;
    arr.array.forEach(angka => {
        if (element > 0) {
            hasil = hasil + angka;
        }
    });
    return hasil;
}

