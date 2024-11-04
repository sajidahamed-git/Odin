const input = document.querySelector(".input");

const allbuttons = document.querySelectorAll(".button");
let inputText = "";

allbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    inputText = inputText + button.innerHTML;
    input.textContent = inputText;
  });
});

const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => {
  inputText = inputText.slice(0, -1);
  input.textContent = inputText;
});

const cancel = document.querySelector('.cancel-button')

cancel.addEventListener('click',()=>{
    inputText = ''
    input.textContent = inputText

})
