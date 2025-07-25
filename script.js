let num1 = '';
let op = '';
let num2 = '';

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if(y == 0){
        return "Error: Division by zero.";
    }
    return x / y;
}

function operate(operator, x, y){
    switch(operator) {
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        default:
            return "Error: Unknown operator";
    }
}


