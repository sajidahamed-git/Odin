const input = document.querySelector(".input");
const allbuttons = document.querySelectorAll(".button");
const backspace = document.querySelector(".backspace");
const cancel = document.querySelector(".cancel-button");
const result = document.querySelector(".result");

let inputText = "";

allbuttons.forEach((button) => {
  renderInput(button)

});

backspace.addEventListener("click", () => {
  inputText = inputText.slice(0, -1);
  input.textContent = inputText;
});

cancel.addEventListener("click", () => {
  inputText = "";
  input.textContent = inputText;
  result.innerHTML = "";
});

function calculate(expression) {
  // Match numbers and operators
  const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g);

  // Check if tokenization was successful
  if (!tokens) {
    throw new Error("Invalid expression");
  }

  // Parse the first number
  let answer = parseFloat(tokens[0]);

  // Iterate over the operators and the following numbers
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = parseFloat(tokens[i + 1]);

    // Perform the calculation based on the operator
    switch (operator) {
      case "+":
        answer += nextNumber;
        break;
      case "-":
        answer -= nextNumber;
        break;
      case "*":
        answer *= nextNumber;
        break;
      case "/":
        answer /= nextNumber;
        break;
      default:
        throw new Error("Invalid operator");
    }
  }

  result.innerHTML = answer;
}

function renderInput(button){
  button.addEventListener("click", () => {
    if (button.innerHTML === "=") {
      calculate(inputText);
      return;
    }
    inputText = inputText + button.innerHTML;
    if (inputText.length > 10) {
      result.innerHTML = "max digits";
      return;
    }
    input.textContent = inputText;
  });


}