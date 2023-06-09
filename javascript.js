let num1 = null;
let num2 = null;
let operator = null;
let displayValue = 0;
let newNumber = true; // flag to indicate if the user is entering a new number
let isCalculated = false;

const display = document.getElementById("display");
document.addEventListener("keydown", handleKeyPress); //event listener for when a key is pressed

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
    if (displayValue === "0") {
      displayValue = value;
    } else if (displayValue === "-0") {
      displayValue = "-" + value;
    } else {
      if (displayValue.length >= 9) return; // checks if the number exceeds nine digits
      displayValue += value;
    }
  }

  display.value = displayValue;
}

function decimalClicked() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  display.value = displayValue;
}

function toggleSign() {
  if (displayValue !== "") {
    if (operator === null) {
      num1 = -1 * parseFloat(displayValue);
      displayValue = num1.toString();
    } else {
      num2 = -1 * parseFloat(displayValue);
      displayValue = num2.toString();
    }
    display.value = displayValue;
  }
}

function backspace() {
  if (isCalculated) return; //If calculation was performed ignore backspace

  if (displayValue.length === 1) displayValue = "0";
  else displayValue = displayValue.slice(0, -1);

  display.value = displayValue;
}

function operatorClicked(op) {
  if (num1 === null) {
    num1 = displayValue;
    operator = op;
  } else {
    num2 = displayValue;
    calculate();
    operator = op;
  }
  newNumber = true; // reset the flag
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
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      if (num2 === "0") {
        result = NaN;
      } else {
        result = parseFloat(num1) / parseFloat(num2);
      }
      break;
    default:
      result = NaN;
  }
  isCalculated = true;
  num1 = result;
  //num2 = null;
  operator = null;
  console.log("result: " + result);

  if (result > 999999999) {
    display.value = "Overflow";
    console.log("Overflow");
    num1 = num2 = result = displayValue = null;
    return;
  }
  console.log("numberOfDigits " + ("" + result).length);

  if (("" + result).length > 9) {
    //converts result to a string and counts characters including decimal point
    displayValue = result.toString().slice(0, 10);
    console.log("displayValue " + displayValue);
  } else displayValue = result.toString();

  display.style.opacity = 0;
  setTimeout(function () {
    display.value = displayValue;
    display.style.opacity = 1;
  }, 100);
}

function handleKeyPress(event) {
  const key = event.key;

  // Check if the pressed key is a number key
  if (!isNaN(Number(key))) {
    updateDisplay(key);
    return;
  }

  // Check for other keys such as operators and special keys
  switch (key) {
    case "+":
      operatorClicked("+");
      break;
    case "-":
      operatorClicked("-");
      break;
    case "*":
      operatorClicked("*");
      break;
    case "/":
      operatorClicked("/");
      break;
    case "=":
    case "Enter":
      calculate();
      break;
    case ".":
      decimalClicked();
      break;
    case "Backspace":
      backspace();
      break;
    case "Escape":
      clearDisplay();
      break;
    default:
      // Ignore other keys
      break;
  }
}
