const multiply = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    } else {
        return "Please input numbers"
    }
}
multiply(2, 2); // 4