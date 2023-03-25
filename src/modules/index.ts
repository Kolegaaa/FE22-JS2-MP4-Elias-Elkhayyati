document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display') as HTMLDivElement;
  let operation:string = '';
  let firstOperand:string = '';
  let secondOperand:string = '';
  let calculating:boolean = false;

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const value: string | null = button.textContent 

      if (!value) {
        return;
      }

      if (/\d/.test(value) || value === '.') {
        if (calculating) {
          secondOperand += value;
          display.textContent = secondOperand;
        } else {
          firstOperand += value;
          display.textContent = firstOperand;
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        operation = value;
        calculating = true;
      } else if (value === '=') {
        if (firstOperand && secondOperand && operation) {
          display.textContent = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operation).toString();
          firstOperand = '';
          secondOperand = '';
          operation = '';
          calculating = false;
        }
      }
      if (value === "C"){
        display.textContent = "";
        firstOperand = '';
        secondOperand = '';
        operation = '';
      }
    });
  });

  function calculate(a: number, b: number, op: string): number {
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


