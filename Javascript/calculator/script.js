import { calculate } from "./calculate.js";

const keys = document.querySelectorAll(".button");
const inputfield = document.querySelector(".input");

let inputString = "";
keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (inputString.length > 10) {
      result.textContent = "max limit";
      return;
    }
    inputString += key.textContent;
    inputfield.textContent = inputString;
  });
});

const cancel = document.querySelectorAll(".cancel-button");

cancel.forEach((key) => {
  key.addEventListener("click", () => {
    inputString = "";
    inputfield.textContent = "";
    result.textContent = "";
  });
});

const equal = document.querySelector(".equal");
const result = document.querySelector(".result");
//for equal key
equal.addEventListener("click", () => {
  result.textContent = calculate(inputString);
});
//for enter key
  document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      result.textContent = calculate(inputString);
    }

    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "-", "+"].includes(event.key)){
      if (inputString.length > 10) {
        result.textContent = "max limit";
        return;
      }


      inputString += event.key;

      inputfield.textContent = inputString;
      
    }
  });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    inputString = "";
    inputfield.textContent = "";
    result.textContent = "";
    console.log(event);
    
  }

  else console.log(event);
});
const backspace = document.querySelector('.backspace')

backspace.addEventListener('click',()=>console.log('hello'))