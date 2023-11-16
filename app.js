const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "Draw";
const RESULT_PLAYER_WINS = "Player Wins";
const RESULT_COMPUTER_WINS = "Computer Wins";
let gameIsRunning = false;


const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER}, or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }

  return selection;
};

const getComputerChoice = function () {
  const randomNumber = Math.random();
  if (randomNumber < 0.4) {
    return ROCK;
  } else if (randomNumber < 0.7) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const determineWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
  return RESULT_PLAYER_WINS;
} else {
    return RESULT_COMPUTER_WINS;
}
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("The game is starting... ");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = determineWinner(computerChoice, playerSelection);
  console.log(winner);
 
});
