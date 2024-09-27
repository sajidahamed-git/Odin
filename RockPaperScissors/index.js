
let humanChoice,humanScore = 0,compChoice,compScore = 0,draw = 0;

function playGame() {
    
   
    playRound(humanChoice,compChoice)
    playRound(humanChoice,compChoice)
    playRound(humanChoice,compChoice)
    playRound(humanChoice,compChoice)
    playRound(humanChoice,compChoice)
    displayScore(humanScore,compScore,draw)
}

playGame()

function getCompChoice (){
    let rand = Math.random();
    if (rand > 0 && rand < 0.33){
        compChoice = 'rock'
        //return console.log(compChoice)
    }
    else if (rand > 0.33 && rand < 0.77) {
        compChoice = 'paper'
        //return console.log(compChoice);
    }
    else {
        compChoice = 'scissors'
        //return console.log(compChoice)

    }
}

function getHumanChoice () {
    temp = prompt('enter your Move');
    if (temp == 'rock' || temp == 'paper' || temp == 'scissors' ){
        //onsole.log(temp);
        humanChoice = temp;
    }
    else {
        console.log('enter allowed value in lower case')
    }

}



function playRound(humanChoice,compChoice)
{
    getCompChoice()
    getHumanChoice()
        if (humanChoice == 'rock'){
            if (compChoice == 'rock') {
                console.log('Match Draw');
                draw = draw + 1;
                }
            if (compChoice == 'paper') {
                console.log('Paper beats Rock you lose');
                compScore = compScore + 1;
            }
            if (compChoice == 'scissors') {
                console.log('Rock beats Scissors you win')
                humanScore = humanScore +1;

            }

        }
        if (humanChoice == 'paper') {
            if (compChoice == 'paper') {
                console.log('Match Draw');
                draw = draw + 1;

                }
            if (compChoice == 'rock') {
                console.log('Paper beats Rock you win');
                humanScore = humanScore +1;

            }
            if (compChoice == 'scissors') {
                console.log('Scissors beats paper you lose')
                compScore = compScore + 1;
            }

        }
        if (humanChoice == 'scissors') {
            if (compChoice == 'rock') {
                console.log('Match Draw');
                draw = draw + 1;

                }
            if (compChoice == 'paper') {
                console.log('Paper beats Scissors you win');
                humanScore = humanScore +1;
            }
            if (compChoice == 'rock') {
                console.log('Rock beats Scissors you lose')
                compScore = compScore + 1;
            }

        }
}  

function displayScore (a,b,c) {
    console.log('Human score '+a);
    console.log('computer score '+b);
    console.log('Draw '+c);
    
    
    
}



















