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

const calculator = document.querySelector(".calculator");
const allButtons = document.querySelector(".calculator__buttons-container");
const display = document.querySelector("[data-screen]");
const numButtons = document.querySelectorAll("[data-num]");
const opsButtons = document.querySelectorAll("[data-ops]");
const equalsButton = document.querySelector("[data-equals]");

allButtons.addEventListener("click", (e) => {
  const target = e.target;
  const ops = target.dataset.ops;
  const displayNum = display.textContent;
  const targetContent = target.textContent;

  if (target.matches("button")) {
    console.log("Hey");
    return;
  }

  // if (!ops) {
  //   if (displayNum === "0" || previousKeyType === "operator") {
  //     display.textContent = keyContent;
  //   } else {
  //     display.textContent = displayedNum + keyContent;
  //   }
  // }
});
