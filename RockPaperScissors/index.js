let humanChoice,humanScore,compChoice,computerScore;

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


if (compChoice == humanChoice) {
    console.log('match draw')
}
else {
    console.log('computer choice ' +compChoice)
    console.log('human choice ' +humanChoice);
    
}



