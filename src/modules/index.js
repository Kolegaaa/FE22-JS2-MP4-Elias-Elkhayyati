"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    let operation = '';
    let firstOperand = '';
    let secondOperand = '';
    let calculating = false;
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (!value) {
                return;
            }
            if (/\d/.test(value) || value === '.') {
                if (calculating) {
                    secondOperand += value;
                    display.textContent = secondOperand;
                }
                else {
                    firstOperand += value;
                    display.textContent = firstOperand;
                }
            }
            else if (['+', '-', '*', '/'].includes(value)) {
                operation = value;
                calculating = true;
            }
            else if (value === '=') {
                if (firstOperand && secondOperand && operation) {
                    display.textContent = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operation).toString();
                    firstOperand = '';
                    secondOperand = '';
                    operation = '';
                    calculating = false;
                }
            }
            if (value === "C") {
                display.textContent = "";
                firstOperand = '';
                secondOperand = '';
                operation = '';
            }
        });
    });
    function calculate(a, b, op) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});
