let randomChoice = Math.floor(Math.random() * 3);
console.log(randomChoice);
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if (randomChoice === 0) { 
        return rock;
    }
    else if (randomChoice === 1) {
        return scissors;
    }
    else {
        return paper;
    }
}
console.log(getComputerChoice());

const input = prompt("Type rock, paper or scissors");
const choice = String(input.toLowerCase());

function getHumanChoice() {
 
    if (choice === 'rock'){
        return rock;
    }
    else if (choice === 'scissors') {
        return scissors;
    }
    else if (choice === 'paper'){
        return paper;
    }
    else {
        alert('Invalid input');
    }
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    switch (true) {
        case computerChoice === rock && humanChoice === scissors:{
            console.log("You lose! Rock beats Scissors");
            return computerScore++;
        }
        case computerChoice === rock && humanChoice === paper:{
            console.log("You Win! Paper beats Rock");
            return humanScore++;
        }
        case computerChoice === paper && humanChoice === rock:{
            console.log("You lose! Paper beats Rock");
            return computerScore++;
        }
        case computerChoice === paper && humanChoice === scissors:{
            console.log("You Win! Scissors beats Paper");
            return humanScore++;
        }
        case computerChoice === scissors && humanChoice === paper:{
            console.log("You Lose! Scissors beats Paper");
            return computerScore++;
        }
        case computerChoice === scissors && humanChoice === rock:{
            console.log("You Win! Rock beats Scissors");
            return humanScore++;
        }
        default: {
            console.log("It's a Draw");
            break;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
