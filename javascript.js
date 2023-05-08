let num1,
  num2 = null;
let operator = null;
let displayValue = null;
let isDisplayCleared = false;

const display = document.getElementById("display");

function updateDisplay(value) {
  if (display.value === "0") {
    display.value = value;
  } else if (num1 != null) {
    if (isDisplayCleared === false) {
      display.value = "";
      isDisplayCleared = true;

      console.log("isDisplayCleared");
    }
    display.value += value;
  }
}

function operatorClicked(op) {
  num1 = parseFloat(display.value);
  operator = op;
  display.value = num1;
  isDisplayCleared = false;
}

function clearDisplay() {
  display.value = null;
  num1 = null;
  num2 = null;
  operator = null;
  isDisplayCleared = false;
}

function add(num1, num2) {
  display.value = parseFloat(num1) + parseFloat(num2);
  console.log(parseFloat(num1) + parseFloat(num2));
  console.log("operator " + operator);
}

function substract(num1, num2) {
  display.value = parseFloat(num1) - parseFloat(num2);
  console.log(parseFloat(num1) - parseFloat(num2));
}

function multiply(num1, num2) {
  display.value = parseFloat(num1) * parseFloat(num2);
  console.log(parseFloat(num1) * parseFloat(num2));
}

function divide(num1, num2) {
  display.value = parseFloat(num1) / parseFloat(num2);
  console.log(parseFloat(num1) / parseFloat(num2));
}

function calculate() {
  num2 = parseFloat(display.value);

  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("operator " + operator);
  
  if (num2 == 0 && operator == "/") {
    return NaN;
  }
  switch (operator) {
    case "+":
      console.log("tutaj");
      add(num1, num2);
      break;
    case "-":
      substract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      display.value = "ERR";
      break;
  }

  operator = null;
  console.log("op " + operator);
  isDisplayCleared = false;
}
