// game.js
// Main rock paper scissors game functions

function computerChoice() {
  let answers = ["Rock", "Paper", "Scissors"];
    return answers[Math.floor(Math.random()*answers.length)];
};

function playRound(playerSelection, computerSelection) {

  if(playerSelection == computerSelection) {
    return "It's a tie!";
  }

  if(playerSelection == "Rock" && computerSelection == "Paper") {
    return "You Lose!";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You Win!";
  }

  if(playerSelection == "Paper" && computerSelection == "Rock") {
    return "You Win!";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You Lose!";
  }

  if(playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You Lose!";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You Win!";
  }

};

// function clicked() {

// }

// function rockClick() {
//   console.log("Rock");
// }

// function paperClick() {
//   console.log("Paper");
// }

// function scissorsClick() {
//   console.log("Scissors");
// }

// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");

// rock.addEventListener("click", rockClick);
// paper.addEventListener("click", paperClick);
// scissors.addEventListener("click", scissorsClick);

function clicked(e) {
  const playerChoice = e.srcElement.textContent;
  const compChoice = computerChoice();
  const winMsg = playRound(playerChoice, compChoice);

  winner.textContent = winMsg;
  result.textContent = `You chose ${playerChoice}. Computer chose ${compChoice}.`;
}

const winner = document.getElementById("winner");
const result = document.getElementById("result");
const choices = Array.from(document.querySelectorAll('.click_me'));
choices.forEach(choice => choice.addEventListener("click", clicked));


// const computerSelection = computerPlay();
// const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
// console.log(playRound(playerSelection, computerSelection));