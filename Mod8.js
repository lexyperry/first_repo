// Calculation history array
const calculationHistory = [];

/**
 * Adds a calculation to the history log.
 * @param {number} operand1 - The first operand.
 * @param {number} operand2 - The second operand.
 * @param {string} operator - The operation performed (+, -, *, /).
 * @param {number|string} result - The result or error message.
 */
function logCalculation(operand1, operand2, operator, result) {
  calculationHistory.push({
    operand1,
    operand2,
    operator,
    result,
    timestamp: new Date().toISOString()
  });
}

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  const result = a + b;
  logCalculation(a, b, '+', result);
  return result;
}

/**
 * Subtracts second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  const result = a - b;
  logCalculation(a, b, '-', result);
  return result;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  const result = a * b;
  logCalculation(a, b, '*', result);
  return result;
}

/**
 * Divides the first number by the second.
 * Handles division by zero.
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 */
function divide(a, b) {
  if (b === 0) {
    const error = 'Error: Division by zero';
    logCalculation(a, b, '/', error);
    return error;
  }
  const result = a / b;
  logCalculation(a, b, '/', result);
  return result;
}

/**
 * Displays the calculation history in the console.
 */
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log('No calculations in history.');
    return;
  }

  console.log('\n--- Calculation History ---');
  calculationHistory.forEach((entry, index) => {
    console.log(
      `${index + 1}. ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result} [${entry.timestamp}]`
    );
  });
}

// Example Usage
console.log(add(8, 4));         // 12
console.log(subtract(20, 6));   // 14
console.log(multiply(3, 7));    // 21
console.log(divide(10, 0));     // Error: Division by zero
console.log(divide(18, 3));     // 6

// Show all stored operations
displayHistory();
