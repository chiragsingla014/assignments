/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    expression = expression.replace(/\s+/g, '');

    if (!/^[0-9+\-*/().]+$/.test(expression)) {
      throw new Error("Invalid expression. Only numbers and arithmetic operators are allowed.");
    }
    if (!this.checkParentheses(expression)) {
      throw new Error("Mismatched parentheses.");
    }
    console.log(expression);
    this.result = this.evaluateExpression(expression);
  }

  checkParentheses(expression) {
    let count = 0;
    for (let char of expression) {
      if (char === '(') count++;
      if (char === ')') count--;
      if (count < 0) return false;
    }
    return count === 0;
  }
  



  evaluateExpression(expression) {
    // Infix to Postfix (Shunting Yard Algorithm)


    const outputQueue = [];
    const operatorStack = [];
    const operators = {
      '+': { precedence: 1, associativity: 'L' },
      '-': { precedence: 1, associativity: 'L' },
      '*': { precedence: 2, associativity: 'L' },
      '/': { precedence: 2, associativity: 'L' },
      '^': { precedence: 3, associativity: 'R' }
    };
    const tokens = expression.match(/\d+(\.\d+)?|\+|\-|\*|\/|\^|\(|\)/g);
  
    tokens.forEach(token => {
      if (/\d/.test(token)) {
        outputQueue.push(Number(token));
      } else if ('+-*/^'.includes(token)) {
        while (
          operatorStack.length &&
          '*/+-^'.includes(operatorStack[operatorStack.length - 1]) &&
          (
            (operators[token].associativity === 'L' && operators[token].precedence <= operators[operatorStack[operatorStack.length - 1]].precedence) ||
            (operators[token].associativity === 'R' && operators[token].precedence < operators[operatorStack[operatorStack.length - 1]].precedence)
          )
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.pop();
      }
    });
  
    while (operatorStack.length) {
      outputQueue.push(operatorStack.pop());
    }
  
    console.log(outputQueue);
    return this.evaluateRPN(outputQueue);
  }
  

  evaluateRPN(queue) {
    const stack = [];

    for (let token of queue) {
      if (typeof token === 'number') {
        stack.push(token);
      } else {
        let b = stack.pop();
        let a = stack.pop();

        switch (token) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            if (b === 0) {
              throw new Error("Cannot divide by zero");
            }
            stack.push(a / b);
            break;
        }
      }
    }

    return stack[0];
  }
}


module.exports = Calculator;
