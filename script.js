// script.js
// Main rock paper scissors game functions



/* 
HOVER ANIMATIONS
*/

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

function makeCharVisible(e) {
  if(e.target.id == "rock") {
    playerRock.classList.add("charVisible");
  } else if(e.target.id == "paper") {
    playerPaper.classList.add("charVisible");
  } else {
    playerScissors.classList.add("charVisible");
  };
};

function makeCharInvisible(e) {
  if(e.target.id == "rock") {
    playerRock.classList.remove("charVisible");
  } else if(e.target.id == "paper") {
    playerPaper.classList.remove("charVisible");
  } else {
    playerScissors.classList.remove("charVisible");
  };
};

function addHoverAnimations() {
  buttonRock.addEventListener("mouseenter", makeCharVisible);
  buttonRock.addEventListener("mouseleave", makeCharInvisible);
  buttonPaper.addEventListener("mouseenter", makeCharVisible);
  buttonPaper.addEventListener("mouseleave", makeCharInvisible);
  buttonScissors.addEventListener("mouseenter", makeCharVisible);
  buttonScissors.addEventListener("mouseleave", makeCharInvisible);
};

addHoverAnimations();

function removeHoverAnimations() {
  buttonRock.removeEventListener("mouseenter", makeCharVisible);
  buttonRock.removeEventListener("mouseleave", makeCharInvisible);
  buttonPaper.removeEventListener("mouseenter", makeCharVisible);
  buttonPaper.removeEventListener("mouseleave", makeCharInvisible);
  buttonScissors.removeEventListener("mouseenter", makeCharVisible);
  buttonScissors.removeEventListener("mouseleave", makeCharInvisible);
};

/*
HANDLE PLAYER SELECTION
*/

const winner = document.getElementById("winner");
const result = document.getElementById("result");
const choices = Array.from(document.querySelectorAll('.click_me'));

choices.forEach(choice => choice.addEventListener("click", clicked));

let playerChoice;

function clicked(e) {
  countdown(three);
  playerChoice = e.srcElement.textContent;
  setPlayerChar(playerChoice);
};

/* 
COUNTDOWN
*/

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

/* 
SET CHARACTERS AFTER SELECTION
*/

function setPlayerChar(choice) {
  removeHoverAnimations();
  if(choice == "Rock") {
    playerRock.classList.add("charVisible");
    setTimeout(resetCharVisible, 3550, playerRock);
  } else if(choice == "Paper") {
    playerPaper.classList.add("charVisible");
    setTimeout(resetCharVisible, 3550, playerPaper);
  } else {
    playerScissors.classList.add("charVisible");
    setTimeout(resetCharVisible, 3550, playerScissors);
  };
  setTimeout(addHoverAnimations, 3000);
};

function setComputerChar(choice) {
  const computerRock = document.getElementById("computerRock");
  const computerPaper = document.getElementById("computerPaper");
  const computerScissors = document.getElementById("computerScissors");

  if(choice == "Rock") {
    computerRock.classList.add("charVisible");
    setTimeout(resetCharVisible, 1800, computerRock);
  } else if(choice == "Paper") {
    computerPaper.classList.add("charVisible");
    setTimeout(resetCharVisible, 1800, computerPaper);
  } else {
    computerScissors.classList.add("charVisible");
    setTimeout(resetCharVisible, 1800, computerScissors);
  };
};

function resetCharVisible(elem) {
  elem.classList.remove("charVisible");
}

/* 
ACTUALLY PLAY THE GAME
*/

function keepPlaying() {
    const compChoice = computerChoice();
    const winMsg = playRound(playerChoice, compChoice);

    setComputerChar(compChoice);

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

/* 
UPDATE SCORE
*/

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
const playerCounter = document.getElementById("playerWins");
const computerCounter = document.getElementById("compWins");
const tieCounter = document.getElementById("tieCount");

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

/* 
HIGHLIGHT LEADER
*/

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

/* 
RESET GAME
*/

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
