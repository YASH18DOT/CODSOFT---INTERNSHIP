const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      currentInput = "";
      display.textContent = "0";
      resultDisplayed = false;
    } else if (button.id === "equal") {
      try {
        const result = eval(currentInput); // basic evaluation
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch (e) {
        display.textContent = "Error";
        currentInput = "";
        resultDisplayed = false;
      }
    } else {
      if (resultDisplayed) {
        // If the last action was "=", continue only if operator is pressed
        if (["+", "-", "*", "/"].includes(value)) {
          currentInput += value;
        } else {
          // Start new calculation
          currentInput = value;
        }
        resultDisplayed = false;
      } else {
        currentInput += value;
      }

      display.textContent = currentInput;
    }
  });
});
