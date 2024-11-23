const Player = (name, symbol) => {
  return { name, symbol };
};
//start button event listener
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
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  const status = document.querySelector(".status"); //used in render status function

  function createPlayers(player1Name, player2Name) {
    //creates both players objects with name and symbol
    player1 = Player(player1Name, "X");
    player2 = Player(player2Name, "O");
  }

  function addEventListeners() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box, i) => {
      box.addEventListener("click",() => {
        //click event listener
        if (!box.textContent) {
          //if current player is 1 which is default x is printed in cell if not o is printed
          box.textContent = currentplayer === 1 ? "X" : "O";
          boardArray[i] = box.textContent; //index of the box is used to copy the value to the boardArray
          // console.log(boardArray);

          if (checkWin()) {
            //checks tthe boardarray whether is anyplayer has won the match
            console.log("winner");
            renderWinner();
          } else {
            //game flow continues
            currentplayerChanger(); //and player is changed by calling this function
            renderStatus(); //this is called to change the display status which displays which
          }
        } else console.log("cheater");
      });
    });
  }

  function currentplayerChanger() {
    currentplayer = currentplayer === 1 ? 2 : 1; //change the player turn
    // console.log(currentplayer);
    //player plays next
  }

  function renderStatus() {
    if (currentplayer === 1) {
      status.textContent = `${player1.name}'s Turn (${player1.symbol})`;
    } else {
      status.textContent = `${player2.name}'s Turn (${player2.symbol})`;
    }
  }
  function getCurrentPlayer() {
    if (currentplayer === 1) {
      return player1;
    } else return player2;
  }

  function checkWin() {
    return winPatterns.some((pattern) =>
      pattern.every((index) => boardArray[index] === getCurrentPlayer().symbol)
    );
  }

  function renderWinner() {
    status.textContent = `${getCurrentPlayer().name} Won the Game`;
  }

  return {
    createPlayers,
    renderStatus,
    currentplayerChanger,
    addEventListeners,
  };
})();
