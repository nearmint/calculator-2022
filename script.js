function add(a,b) { 
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,operator,b) {
    if(operator === '+') add(a,b);
    if(operator === '-') subtract(a,b);
    if(operator === '*') multiply(a,b);
    if(operator === '/') divide(a,b);
}

