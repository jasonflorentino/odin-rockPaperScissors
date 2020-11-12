// game.js
// Main rock paper scissors game functions

function computerPlay() {
  let answers = ["rock", "paper", "scissors"];
    return answers[Math.floor(Math.random()*answers.length)];
};

function playRound(playerSelection, computerSelection) {
  console.log("You chose: ", playerSelection)
  console.log("Computer chose: ", computerSelection)

  if(playerSelection == computerSelection) {
    return "It's a tie!";
  }

  if(playerSelection == "rock" && computerSelection == "paper") {
    return "You lose!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win!";
  }

  if(playerSelection == "paper" && computerSelection == "rock") {
    return "You Win!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose!";
  }

  if(playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win!";
  }

};

const computerSelection = computerPlay();
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
console.log(playRound(playerSelection, computerSelection));