let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*100) % 3;
    return choices[randomIndex];
}


function getLoseMessage(playerSelection, computerSelection) {
    return "You Lose! "+ computerSelection +" beats " + playerSelection;
}

function getWonMessage(playerSelection, computerSelection) {
    return "You Won! "+ playerSelection +" beats " + computerSelection;
}

function playGame(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === choices[0]) {
        if(computerSelection == choices[0]) {
            return "Oh! Draw!"
        } else if(computerSelection == choices[1]) {
            return getLoseMessage(playerSelection, computerSelection);
        } else {
            return getWonMessage(playerSelection, computerSelection);
        }
    } else if(playerSelection.toLowerCase() === choices[1]) {
        if(computerSelection == choices[1]) {
            return "Oh! Draw!"
        } else if(computerSelection == choices[2]) {
            return getLoseMessage(playerSelection, computerSelection);
        } else {
            return getWonMessage(playerSelection, computerSelection);
        }
    } else if(playerSelection.toLowerCase() === choices[2]) {
        if(computerSelection == choices[2]) {
            return "Oh! Draw!"
        } else if(computerSelection == choices[0]) {
            return getLoseMessage(playerSelection, computerSelection);
        } else {
            return getWonMessage(playerSelection, computerSelection);
        }
    } else {
        return "Wrong Input!";
    }
}

function game() {
    for(let i = 1; i <= 5; i++) {
        let input = prompt("Please enter one of the following possible inputs 'rock', 'paper', 'scissors'");
        let computerSelection = getComputerChoice();
        console.log("User Choice - " + input);
        console.log("Computer Choice - " + computerSelection);
        console.log(playGame(input, computerSelection));
        console.log("-------------------------------");
    }
}
game()