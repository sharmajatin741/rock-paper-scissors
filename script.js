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
            return [0, "Oh! Draw!"]
        } else if(computerSelection == choices[1]) {
            return [-1, getLoseMessage(playerSelection, computerSelection)];
        } else {
            return [1, getWonMessage(playerSelection, computerSelection)];
        }
    } else if(playerSelection.toLowerCase() === choices[1]) {
        if(computerSelection == choices[1]) {
            return [0, "Oh! Draw!"]
        } else if(computerSelection == choices[2]) {
            return [-1, getLoseMessage(playerSelection, computerSelection)];
        } else {
            return [1, getWonMessage(playerSelection, computerSelection)];
        }
    } else if(playerSelection.toLowerCase() === choices[2]) {
        if(computerSelection == choices[2]) {
            return [0, "Oh! Draw!"]
        } else if(computerSelection == choices[0]) {
            return [-1, getLoseMessage(playerSelection, computerSelection)];
        } else {
            return [1, getWonMessage(playerSelection, computerSelection)];
        }
    } else {
        return "Wrong Input!";
    }
}

let computerScore = 0, userScore = 0;

const buttons = document.querySelectorAll("button");
const output = document.querySelector(".output");
const scorecard = document.querySelector(".scorecard");

const computerChoice = document.createElement("div");
const resultShow = document.createElement("div");
const computerScorecard = document.createElement("div");
const userScorecard = document.createElement("div");
const overallWinner = document.createElement("div");

output.appendChild(computerChoice);
output.appendChild(resultShow);
scorecard.appendChild(computerScorecard);
scorecard.appendChild(userScorecard);
scorecard.appendChild(overallWinner);

let active;
function optionClick(e) {

    if(active !== undefined) {
        active.style.background = 'white';
    }
    active = this;
    this.style.background = 'green';

    let computerSelection = getComputerChoice();
    let result = playGame(this.innerText, computerSelection);
    
    updateResult(computerSelection, result);
    updateScore(result[0]);
    showOverallResult();
    updateScorecard();

}


function showOverallResult() {
    if (userScore === 5 || computerScore === 5) {
        if (userScore === 5 && computerScore === 5) {
            overallWinner.innerHTML = `Both Player Won`;
        } else if (userScore === 5) {
            overallWinner.innerHTML = `You Won`;
        } else {
            overallWinner.innerHTML = `Computer Won`;
        }
        if(active !== undefined) {
            active.style.background = 'white';
        }    
        buttons.forEach((button) => button.disabled = true);

    }
}

function updateResult(computerSelection, result) {
    computerChoice.innerHTML = `Computer Choice - ${computerSelection}`;
    resultShow.innerHTML = result[1];
}

function updateScorecard() {
    computerScorecard.innerHTML = `Computer Score - ${computerScore}`;
    userScorecard.innerHTML = `User Score - ${userScore}`;
}

function updateScore(winner) {
    if(winner === 0) {

    } else if(winner === 1) {
        userScore++;
    } else {
        computerScore++
    }
}

buttons.forEach((button) => button.addEventListener('click', optionClick));
