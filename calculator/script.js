const input = document.querySelector(".input");
const allbuttons = document.querySelectorAll(".button");
const backspace = document.querySelector(".backspace");
const cancel = document.querySelector(".cancel-button");
const result = document.querySelector(".result");

let inputText = "";

allbuttons.forEach((button) => {
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
function calculate(inputText) {
  console.log(inputText);
  result.innerHTML = eval(inputText);
}
