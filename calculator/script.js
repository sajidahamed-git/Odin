import { calculate } from "./calculate.js";

const input = document.querySelector(".input");
const allbuttons = document.querySelectorAll(".button");
const backspace = document.querySelector(".backspace");
const cancel = document.querySelectorAll(".cancel-button");
const result = document.querySelector(".result");

let inputText = "";

allbuttons.forEach((button) => {
  renderInput(button);
});

backspace.addEventListener("click", () => {
  inputText = inputText.slice(0, -1);
  input.textContent = inputText;
});

cancel.forEach((button) => {
  button.addEventListener("click", () => {
    inputText = "";
    input.textContent = inputText;
    result.innerHTML = "";
  });
});

function renderInput(button) {
  button.addEventListener("click", () => {
    if (button.innerHTML === "=") {
      result.innerHTML = calculate(inputText);
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

document.addEventListener("keypress", (event) => {
  //console.log(event.key);
  if (['1','2','3','4','5','6','7','8','9','/','*','-','+'].includes(event.key))
    {
    inputText = inputText + event.key;
    input.textContent = inputText;
  }
  if (event.key === 'Enter') {
    result.innerHTML = calculate(inputText);
    
  } 
  
  else console.log("enter number");
});
