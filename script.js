let num1 = '';
let operator = '';
let num2 = '';
let valueDisplayed = false;

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

// function convertEquation(str) {
//     let foundOp = false;
//     num1 = '';
//     num2 = '';
//     operator = '';

//     for(let char of str) {
//         // gets the last operator (ex. if input is x +*- y, it will evaluate as x - y)
//         if("+-*/".includes(char)){
//             operator = char;
//             foundOp = true;
//         }
//         else if(!foundOp){
//             num1 += char;
//         }
//         else {
//             num2 += char;
//         }
//     }
// }

function resetCalc () {
    num1 = '';
    num2 = '';
    operator = '';
}

document.addEventListener("DOMContentLoaded", () => {

    const display = document.getElementById("display");
    const num = document.querySelectorAll(".num");
    const op = document.querySelectorAll(".op");
    const clear = document.querySelector(".clear");
    const equals = document.querySelector(".equal");

    function updateDisplay(val){
        display.textContent = val.toString();
    }

    num.forEach(button => {
        button.addEventListener("click", () => {button.textContent
            if(valueDisplayed){
                resetCalc();
                num1 = button.textContent;
                updateDisplay(num1);
                valueDisplayed = false;
                return;
            }
            if(!operator){
                num1 += button.textContent;
                updateDisplay(num1);
            } else {
                num2 += button.textContent;
                updateDisplay(num1 + ' ' + operator + ' ' + num2);
            }
        });
    });

    op.forEach(button => {
        button.addEventListener("click", () => {
            if(!num1){
                return;
            }

            if(valueDisplayed){
                valueDisplayed = false;
            }
            
            if(operator && !num2){
                operator = button.textContent;
                updateDisplay(num1 + ' ' + operator);
                return;
            }

            if(num1 && operator && num2){
                const result = operate(operator, Number(num1), Number(num2));
                
                updateDisplay(result + ' ' + button.textContent);

                if (typeof result === "string" && result.startsWith("Error")) {
                    resetCalc();
                    return;
                }

                num1 = result;
                num2 = '';
                operator = button.textContent;
            }
            else{
                operator = button.textContent;
                updateDisplay(num1 + ' ' + operator);
            }
            
        })
    })

    equals.addEventListener("click", () => {
        const result = operate(operator, Number(num1), Number(num2));
        updateDisplay(result);
        if (typeof result === "string" && result.startsWith("Error")) {
            resetCalc();
            return;
        }
        resetCalc();
        valueDisplayed = true;
        num1 = result.toString();
    });

    clear.addEventListener("click", () => {
        resetCalc();
        updateDisplay('0');
    })
});

