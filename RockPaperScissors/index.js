let humanChoice,humanScore = 0,compChoice,compScore = 0,draw = 0;

for (let i = 0; i < 5; i++) {
    getCompChoice()
    getHumanChoice()
    playRound(humanChoice,compChoice)
        
}

displayScore(humanScore,compScore,draw)

function playRound(a,b) // a is human choice b is comp choice
{
        if (a == 'rock'){
            if (b == 'rock') {
                console.log('Match Draw');
                draw = draw + 1;
                }
            if (b == 'paper') {
                console.log('Paper beats Rock you lose');
                compScore = compScore + 1;
            }
            if (b == 'scissors') {
                console.log('Rock beats Scissors you win')
                humanScore = humanScore +1;
            }
        }
        if (a == 'paper') {
            if (b == 'paper') {
                console.log('Match Draw');
                draw = draw + 1;
                }
            if (b == 'rock') {
                console.log('Paper beats Rock you win');
                humanScore = humanScore +1;
            }
            if (b == 'scissors') {
                console.log('Scissors beats paper you lose')
                compScore = compScore + 1;
            }
        }
        if (a == 'scissors') {
            if (b == 'rock') {
                console.log('Match Draw');
                draw = draw + 1;
                }
            if (b == 'paper') {
                console.log('Paper beats Scissors you win');
                humanScore = humanScore +1;
            }
            if (b == 'rock') {
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

function getCompChoice (){
    let rand = Math.random();
    if (rand > 0 && rand < 0.33){
        compChoice = 'rock'
        // console.log('comp choice '+compChoice);
    }
    else if (rand > 0.33 && rand < 0.77) {
        compChoice = 'paper'
        // console.log('comp choice '+compChoice);
    }
    else {
        compChoice = 'scissors'
        // console.log('comp choice '+compChoice);
    }
}

function getHumanChoice () {
    temp = prompt('enter your Move');
    if (temp == 'rock' || temp == 'paper' || temp == 'scissors' ){
        humanChoice = temp;
        // console.log('human choice ' + humanChoice );
                        
    }
    else {
        // console.log('enter allowed value in lower case')
    }
}




















