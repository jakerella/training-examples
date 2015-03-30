
function fibonacci(min, twoBack, oneBack) {
    twoBack = twoBack || 0;
    oneBack = oneBack || 1;
    
    var next = twoBack + oneBack;
    
    if (next >= min) {
        return next;
    } else {
        return fibonacci(min, oneBack, next);
    }
}

module.exports = fibonacci;