// game.js
// Main rock paper scissors game functions

const winner = document.getElementById("winner");
const result = document.getElementById("result");
const choices = Array.from(document.querySelectorAll('.click_me'));

choices.forEach(choice => choice.addEventListener("click", clicked));

let playerChoice;

function clicked(e) {
  countdown(three);
  playerChoice = e.srcElement.textContent;
};

const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");

function countdown(numberElement) {
  numberElement.addEventListener('transitionend', keepTransitioning)
  numberElement.classList.add("isVisible");
};

function keepTransitioning(e) {
  if(e.target.innerText.includes("3") &&
     e.target.classList.value.includes("notVisible")) {
    countdown(two);
    e.target.classList.remove("isVisible", "notVisible")
  } else if(e.target.innerText.includes("2") &&
            e.target.classList.value.includes("notVisible")) {
    countdown(one);
    e.target.classList.remove("isVisible", "notVisible")
  } else if(e.target.innerText.includes("1") &&
            e.target.classList.value.includes("notVisible")) {
      keepPlaying();
      e.target.classList.remove("isVisible", "notVisible")
  } else {
  e.target.classList.add("notVisible");
  };
}

function keepPlaying() {
    const compChoice = computerChoice();
    const winMsg = playRound(playerChoice, compChoice);

    winner.textContent = winMsg;
    updateScore(winMsg);
    result.textContent = `You chose ${playerChoice}. Computer chose ${compChoice}.`;
}

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
  if(winMsg == "You Win!") {
    playerScore += 1;
    playerCounter.textContent = playerScore.toString();
  } else if(winMsg == "You Lose!") {
    computerScore += 1;
    computerCounter.textContent = computerScore.toString();
  } else {
    tieScore += 1;
    tieCounter.textContent = tieScore.toString();
  }
  highlightLeader();
};

const statYou = document.getElementById("stat-you");
const statComputer = document.getElementById("stat-computer");
const statTies = document.getElementById("stat-ties");

function highlightLeader() {
  if(playerScore > computerScore && playerScore > tieScore) {
    statYou.classList.add("leaderScore")
    statComputer.classList.remove("leaderScore")
    statTies.classList.remove("leaderScore")
  } else if(computerScore > playerScore && computerScore > tieScore) {
    statComputer.classList.add("leaderScore")
    statYou.classList.remove("leaderScore")
    statTies.classList.remove("leaderScore")
  } else if (tieScore > playerScore && tieScore > computerScore) {
    statTies.classList.add("leaderScore")
    statYou.classList.remove("leaderScore")
    statComputer.classList.remove("leaderScore")
  } else {
    statYou.classList.remove("leaderScore")
    statComputer.classList.remove("leaderScore")
    statTies.classList.remove("leaderScore")
  }
}

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
  highlightLeader()
})
