// game.js
// Main rock paper scissors game functions

function clicked(e) {
  const playerChoice = e.srcElement.textContent;
  const compChoice = computerChoice();
  const winMsg = playRound(playerChoice, compChoice);

  winner.textContent = winMsg;
  updateScore(winMsg);
  result.textContent = `You chose ${playerChoice}. Computer chose ${compChoice}.`;
};

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

function updateScore(winMsg) {
  if(winMsg == "It's a tie!") {
    tieScore += 1;
    tieCounter.textContent = tieScore.toString();
  } else if(winMsg == "You Win!") {
    playerScore += 1;
    playerCounter.textContent = playerScore.toString();
  } else {
    computerScore += 1;
    computerCounter.textContent = computerScore.toString();
  }
};

const winner = document.getElementById("winner");
const result = document.getElementById("result");
const choices = Array.from(document.querySelectorAll('.click_me'));

choices.forEach(choice => choice.addEventListener("click", clicked));

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
const playerCounter = document.getElementById("playerWins");
const computerCounter = document.getElementById("compWins");
const tieCounter = document.getElementById("tieCount");

document.getElementById("reset").addEventListener("click", function() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  tieCounter.textContent = tieScore.toString();
  playerCounter.textContent = playerScore.toString();
  computerCounter.textContent = computerScore.toString();
  document.getElementById("winner").textContent = undefined;
  document.getElementById("result").textContent = "Choose your weapon!";
})
