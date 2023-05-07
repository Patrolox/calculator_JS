let num1,
  num2 = 0;
let operator = "";

const display = document.getElementById("display");

function updateDisplay(value) {
  if (display.value == "0") display.value = value;
  else display.value += value;
  // const display = document.getElementById("display");
  // display.value += digit;
}

function operatorPressed(op) {
  num1 = display.value;
  operator = op;
  display.value = "0"; //check what does it look like in real calculator
}

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) return num1 / num2;
  else return NaN;
}

function operation(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return substract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return NaN;
  }
}
