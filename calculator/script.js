const input = document.querySelector('.input')

// const one = document.querySelector(".one");
// const two = document.querySelector('.two')
// const three = document.querySelector('.three')
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");
// const six = document.querySelector(".six");
// const seven = document.querySelector(".seven");
// const eight = document.querySelector(".eight");
// const nine = document.querySelector(".nine");

const allbuttons = document.querySelectorAll('.button')

allbuttons.forEach(button =>{
    button.addEventListener('click',()=>{
        let html = input.textContent
        input.textContent= html + button.textContent
    })
})

// three.onclick = ()=>addinput(three)

// function addinput (button){
//     let html = input.innerHTML
//     input.innerHTML = html + button.innerHTML
// }

// one.addEventListener('click',()=> {
//     let html = input.innerHTML
//     input.innerHTML = html + one.innerHTML
// })
// seven.addEventListener('click',()=> {
//     let html = input.innerHTML
//     input.innerHTML = html+seven.innerHTML
//     })
