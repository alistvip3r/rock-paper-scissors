let randomChoice = Math.floor(Math.random() * 3);
console.log(randomChoice);
const r = "rock";
const p = "paper";
const s = "scissors";

function getComputerChoice() {
    if (randomChoice === 0) { 
        return r;
    }
    else if (randomChoice === 1) {
        return s;
    }
    else {
        return p;
    }
}
console.log(getComputerChoice());