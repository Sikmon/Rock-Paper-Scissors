const arr = ['Rock','Paper', 'Scissors'];
function getComputerChoice() {
    
    const randomItem = Math.floor(Math.random()*arr.length);
    const choice = arr[randomItem];
    return choice;
    
}


function singleRound(playerSelection, computerSelection) {
   
    
    if(playerSelection ==='rock' && computerSelection === 'paper') {
        return ("You lose! Paper beats Rock");
        return false;
    } else if(playerSelection === 'scissors' && computerSelection ==='rock') {
        return "You lose! Rock beats Scissors";
        return false;
    } else if(playerSelection ==='paper' && computerSelection === 'scissors'){
        return "You lose! Scissors beats Paper";
        return false;
    }else if(playerSelection === computerSelection) {
        return "It is a draw";
    }else if(playerSelection ==='rock' && computerSelection === 'scissors') {
        return "You win! Rock beats Scissors";
        return true;
    } else if (playerSelection ==='paper' && computerSelection === 'rock') {
       return "You win! Paper beats Rock";
       return true;
    } else if (playerSelection ==='scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats Paper";
        return true;
    } else {
        return null;
    }

}

function game() {
    
    let user = 0;
    let comp = 0;
    for (let i=1; i<6; i++) { 
        let computerSelection =getComputerChoice().toLowerCase();
        let userInput = prompt("Make your choice:").toLowerCase();
        let result = singleRound(userInput, computerSelection);
       
        console.log(`Round ${i} result: ${result}`);

        if (result === null) {
            console.log("Invalid input!");
            i--;
            continue;
        } else if (result.slice(0,7)=== "You win") {
            user++;
        } else if (result.slice(0,8)==="You lose") {
            comp++;
        }
        
    }
    if (user>comp) {
        console.log("You won!");
    } else if (user<comp) {
        console.log("You lost!");
    } else {
        console.log("It's a tie.");
    }



}

game();


    


