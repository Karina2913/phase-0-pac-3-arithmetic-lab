function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n;
}

//function parses n 
function makeInt(n) {
    return parseInt(n, 10);
}

//parse preserves decimal
function preserveDecimal(n) {
    return parseFloat(n);
}