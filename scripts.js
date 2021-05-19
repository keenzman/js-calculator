const acButton = document.querySelector("[data-clear]");
const display = document.querySelector("[data-screen]");
const numButtons = document.querySelectorAll("[data-num]");
const opsButtons = document.querySelectorAll("[data-ops]");
const equalsButton = document.querySelector("[data-equals]");

let firstOp = "";
let secondOp = "";
let currentOp = null;
let shouldResetScreen = false;

equalsButton.addEventListener("click", evaluate);
acButton.addEventListener("click", clear);

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNum(button.textContent);
  });
});

opsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setOps(button.textContent);
  });
});

function appendNum(num) {
  if (display.textContent === "0" || shouldResetScreen) resetScreen();
  display.textContent += num;
}

function resetScreen() {
  display.textContent = "";
  shouldResetScreen = false;
}

function clear() {
  display.textContent = "0";
  firstOp = "";
  secondOp = "";
  currentOp = null;
}

function setOps(op) {
  if (currentOp !== null) evaluate();
  firstOp = display.textContent;
  currentOp = op;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOp === null || shouldResetScreen) return;
  if (currentOp === "÷" && display.textContent === "0") {
    alert("To Infinity & Beyond! 🚀");
    clear();
    return;
  }
  secondOp = display.textContent;
  display.textContent = parseFloat(operate(currentOp, firstOp, secondOp));
  currentOp = null;
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
  return num1 / num2;
}

function operate(op, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (op) {
    case "+":
      return add(num1, num2);
    case "−":
      return substract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      if (num2 === 0) return null;
      else return divide(num1, num2);
    default:
      return null;
  }
}
