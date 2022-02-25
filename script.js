let store = [];
let display = document.getElementById('display');

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
    if(b === 0) {
        alert("You can't divide by 0, buddy. Start over!");
        return 0;
    } else return a/b;
}

function operate(a,operator,b) {
    if(operator === '+') return add(a,b);
    if(operator === '-') return subtract(a,b);
    if(operator === '*') return multiply(a,b);
    if(operator === '/') return divide(a,b);
}

// Create the functions that populate the display when you click the number buttons… 
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.

function displayValue(str) {
    if(display.textContent === '0' && str === '.') display.textContent = '0.';
    else if(display.textContent === '0') display.textContent = str;
    else display.textContent += str;
}

for (let i = 0; i<10; i++) {
    document.getElementById(`${i}`).addEventListener('click', function() {
        debugger;
        displayValue(`${i}`);
    })
}

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, 
// and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

document.getElementById('add').addEventListener('click', () => {
    operatorPress('+');
})
document.getElementById('subtract').addEventListener('click', () => {
    operatorPress('-');
})
document.getElementById('multiply').addEventListener('click', () => {
    operatorPress('*');
})
document.getElementById('divide').addEventListener('click', () => {
    operatorPress('/');
})

function operatorPress(operator) {
    if(store[0] !== undefined) {
        operateResult();
    }
    store.push(Number(display.textContent));
    store.push(operator);
    display.textContent = '';
}

document.getElementById('equals').addEventListener('click', operateResult)

function operateResult() {
    if(store[0] !== undefined) {
        let result = operate(store[0],store[1],Number(display.textContent));
        result = Math.round(result*100)/100;
        display.textContent = result;
        store = [];
    }
}

document.getElementById('clear').addEventListener('click', reset)

function reset() {
    store = [];
    display.textContent = '0';
}

document.getElementById('dot').addEventListener('click', function() {
    if((Number(display.textContent) % 1) === 0) {
        displayValue('.');
    }
})
