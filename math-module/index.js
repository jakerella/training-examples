var fib = require('./fib');

module.exports = {
    add: function add(x, y) {
        return x + y;
    },
    subtract: function subtract(x, y) {
        return x - y;
    },
    multiply: function multiply(x, y) {
        return x * y;
    },
    divide: function divide(x, y) {
        return x / y;
    },
    fibonacci: fib
};
