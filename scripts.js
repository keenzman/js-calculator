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

opsButtons.forEach((opsPress) => {
  opsPress.addEventListener("click", () => {
    setOps(opsPress.textContent);
  });
});

function appendNum(num) {
  if (display.textContent === "0" || shouldResetScreen) {
    resetScreen();
  }
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
  if (currentOp !== null) {
    evaluate();
  }
  firstOp = display.textContent;
  currentOp = op;
  shouldResetScreen = true;
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
  // Str concat happens without parsing first.
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  // console.log(op);
  switch (op) {
    case "+":
      return add(num1, num2);
    case "−":
      return substract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
    default:
      return null;
  }
}

function evaluate() {
  if (currentOp === "÷" && display.textContent === "0") {
    alert("To Infinity & Beyond! 🚀 ... Can't Divide by 0!");
    clear();
    return;
  }
  secondOp = display.textContent;
  console.log(`This is the second op ${secondOp}`);
  const operation = operate(currentOp, firstOp, secondOp);
  console.log(`This is the evaluate ${operation}`);
  display.textContent = +parseFloat(operation).toFixed(2);
}
