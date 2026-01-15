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

function getHumanChoice() {
    const input = prompt("Type rock, paper or scissors");
    const choice = String(input.toLowerCase());
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