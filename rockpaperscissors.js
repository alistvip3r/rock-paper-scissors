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
    let choice = parseInt(prompt("Enter 0 for rock, 1 for paper or 2 for scissors respectively"));
    if (choice === 0){
        return rock;
    }
    else if (choice === 1) {
        return scissors;
    }
    else {
        return paper;
    }
}
console.log(getHumanChoice());