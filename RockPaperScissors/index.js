let humanChoice,humanScore = 0,compChoice,compScore = 0;

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
getCompChoice()
getHumanChoice()


function playRound(humanChoice,compChoice)
    {
        if (humanChoice == 'rock'){
            if (compChoice == 'rock') {
                console.log('Match Draw');
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










    


