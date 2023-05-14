let num1 = null;
let num2 = null;
let operator = null;
let displayValue = "";
let newNumber = true; // flag to indicate if the user is entering a new number
let isCalculated = false;

const display = document.getElementById("display");

function updateDisplay(value) {
  if (value === "." && display.value.includes(".")) {
    return;
  }

  if (isCalculated) {
    num2 = null;
    isCalculated = false;
    displayValue = "";
  }
  if (newNumber) {
    displayValue = value;
    newNumber = false;
  } else {
    displayValue += value;
  }
  display.value = displayValue;
}

function decimalClicked() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  display.value = displayValue;
}

function operatorClicked(op) {
  if (num1 === null) {
    num1 = displayValue;
    operator = op;
    newNumber = true; // reset the flag
  } else {
    num2 = displayValue;
    calculate();
    operator = op;
    newNumber = true; // reset the flag
  }
}

function clearDisplay() {
  displayValue = "";
  num1 = null;
  num2 = null;
  operator = null;
  display.value = "0";
  newNumber = true; // reset the flag
}

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  if (num2 === "0") {
    return NaN;
  }
  return parseFloat(num1) / parseFloat(num2);
}

function calculate() {
  let result;
  num2 = displayValue;

  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("operator: " + operator);

  if (num1 === null || num2 === null || operator === null) {
    return;
  }

  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      console.log("result: " + result);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      console.log("result: " + result);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      console.log("result: " + result);
      break;
    case "/":
      if (num2 === "0") {
        result = NaN;
      } else {
        result = parseFloat(num1) / parseFloat(num2);
      }
      console.log("result: " + result);
      break;
    default:
      result = NaN;
  }
  isCalculated = true;
  num1 = result;
  //num2 = null;
  operator = null;
  displayValue = result.toString();

  display.style.opacity = 0;
  setTimeout(function () {
    display.value = displayValue;
    display.style.opacity = 1;
  }, 100);
}
