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

function clicked() {
  
}

function rockClick() {
  console.log("Rock");
}

function paperClick() {
  console.log("Paper");
}

function scissorsClick() {
  console.log("Scissors");
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", rockClick);
paper.addEventListener("click", paperClick);
scissors.addEventListener("click", scissorsClick);


// const computerSelection = computerPlay();
// const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
// console.log(playRound(playerSelection, computerSelection));