let num1 = '';
let operator = '';
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

function convertEquation(str) {
    let foundOp = false;
    num1 = '';
    num2 = '';
    operator = '';

    for(let char of str) {
        if("+-*/".includes(char) && !foundOp){
            operator = char;
            foundOp = true;
        }
        else if(!foundOp){
            num1 += char;
        }
        else {
            num2 += char;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let currentInput = "";

    const display = document.getElementById("display");
    const num = document.querySelectorAll(".num");
    const op = document.querySelectorAll(".op");
    const clear = document.querySelector(".clear");
    const equals = document.querySelector(".equal");

    num.forEach(button => {
        button.addEventListener("click", () => {
            currentInput += button.textContent;
            display.textContent = currentInput;
        });
    });

    op.forEach(button => {
        button.addEventListener("click", () => {
            currentInput += button.textContent;
            display.textContent = currentInput;
        })
    })

    equals.addEventListener("click", () => {
        convertEquation(currentInput);
        display.textContent = operate(operator, Number(num1), Number(num2));
    });

    clear.addEventListener("click", () => {
        currentInput = '';
        num1 = '';
        num2 = '';
        operator = '';
        display.textContent = '0';
    })
});

