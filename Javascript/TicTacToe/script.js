const Player = (name, symbol) => {
  return { name, symbol };
};

document.addEventListener("DOMContentLoaded", () => {
  //ensure dom is loaded
  const startbutton = document.querySelector(".startbutton"); //select start button
  startbutton.addEventListener("click", () => {
    //add click event listener to start button
    const player1Name = document.querySelector(".player1").value; //get player1name from input
    const player2Name = document.querySelector(".player2").value;
    // console.log(player1Name,player2Name);
    Game.createPlayers(player1Name, player2Name); //pass both playernames to creteplayers func
    Game.renderStatus();
    Game.addEventListeners(); //adds click listeners to all the boxes
  });
});

const Game = (() => {
  let boardArray = Array(9).fill(null);
  let currentplayer = 1;
  let player1, player2;
  const status = document.querySelector(".status"); //used in render status function

  function createPlayers(player1Name, player2Name) {
    //creates both players objects with name and symbol
    player1 = Player(player1Name, "X");
    player2 = Player(player2Name, "O");
  }

  function addEventListeners() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box, i) => {
      box.addEventListener("click", () => {
        //click event listener
        if (!box.textContent) {
          //if current player is 1 which is default x is printed in cell if not o is printed
          box.textContent = currentplayer === 1 ? "X" : "O";
          boardArray[i] = box.textContent; //index of the box is used to copy the value to the boardArray
          console.log(boardArray);
          currentplayerChanger(); //and player is changed by calling this function
        } else console.log("cheater");
      });
    });
  }
  
  function currentplayerChanger() {
    currentplayer = currentplayer === 1 ? 2 : 1; //change the player turn
    // console.log(currentplayer);
    renderStatus(); //this is called to change the display status which displays which
    //player plays next
  }

  function renderStatus() {
    if (currentplayer === 1) {
      status.textContent = `${player1.name}'s Turn (${player1.symbol})`;
    } else {
      status.textContent = `${player2.name}'s Turn (${player2.symbol})`;
    }
  }

  // let gamearray = Array(9).fill(null)
  // let currentplayer = 1
  return {
    createPlayers,
    renderStatus,
    currentplayerChanger,
    addEventListeners,
  };
})();

// const reset = document.querySelector(".restartbutton");
// reset.addEventListener("click", () => {
//   Game.currentplayerChanger(); // Arrow function ensures 'this' is correct
// });
