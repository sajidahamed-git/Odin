let i = 5;
let j = 2;

let boxesHTML = "";

const onebox = '<div class="box"></div>';
for (let index = 0; index < 255; index++) {
  boxesHTML += onebox;
}

document.querySelector(".grid").innerHTML = boxesHTML;
