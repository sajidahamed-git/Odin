function generatecontainerhtml() {
  const container = document.querySelector(".container");
  const rows = Number(document.querySelector(".input").value);
  console.log(typeof rows);
  if (rows <= 100 && Number.isInteger(rows)) {
    console.log(rows);
    const oneboxHTML = '<div class="boxes"></div>';
    let containerHTML = "";
    for (let index = 0; index < rows * rows; index++) {
      containerHTML += oneboxHTML;
    }
    container.innerHTML = containerHTML;
    const boxsizewidth = 1500 / rows; // depends upon max width of the container
    const boxsizeheight = 600 / rows;

    const boxes = document.querySelectorAll(".boxes");

    boxes.forEach((box) => {
      box.style.width = `${boxsizewidth}px`;
      box.style.height = `${boxsizeheight}px`;
    });

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        box.classList.add("active");
      });
    });
  } else
    document.querySelector(".container").innerHTML =
      "enter a integer number below 100";
}
