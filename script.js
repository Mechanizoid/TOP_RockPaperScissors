// Rock Paper Scissors game code

// Yeah I know I shouldn't know about this yet...
const Choice = Object.freeze({
  ROCK:     0,
  PAPER:    1,
  SCISSORS: 2
});

const Outcome = Object.freeze({
  LOSE: 0,
  WIN:  1,
  TIE:  2
});


// score variables
let humanScore = 0;
let computerScore = 0;

let gameRunning = true;


function getComputerChoice() {
  let choice = "";

  // generates a random integer between 0 and 2
  const i = Math.floor( (Math.random() * 3) );

  switch(i) {
  case Choice.ROCK:
    choice = "rock";
    break;
  case Choice.PAPER:
    choice = "paper";
    break;
  case Choice.SCISSORS:
    choice = "scissors";
    break;
  }

  return choice;
}

function playRound(humanChoice, computerChoice) {
  let outcome = null;

  if (computerChoice === 'rock') {
    switch (humanChoice) {
    case 'rock':
      outcome = Outcome.TIE;
      break;
    case 'paper':
      outcome = Outcome.WIN;
      break;
    case 'scissors':
      outcome = Outcome.LOSE;
      break;
    }
  } else if (computerChoice === 'paper') {
    switch(humanChoice) {
    case 'rock':
      outcome = Outcome.LOSE;
      break;
    case 'paper':
      outcome = Outcome.TIE;
      break;
    case 'scissors':
      outcome = Outcome.WIN;
      break;
    }
  } else if (computerChoice === 'scissors') {
    switch (humanChoice) {
    case 'rock':
      outcome = Outcome.WIN;
      break;
    case 'paper':
      outcome = Outcome.LOSE;
      break;
    case 'scissors':
      outcome = Outcome.TIE;
      break;
    }
  }

  switch (outcome) {
  case Outcome.WIN:
    updateMessageArea(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    break;
  case Outcome.LOSE:
    updateMessageArea(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    break;
  case Outcome.TIE:
    updateMessageArea(`Uh oh, we both chose ${computerChoice}. This round is a tie!`);
    break;
  }
}

function updateMessageArea(message) {
  messageArea.textContent = message;
}


// let's play the game

console.log("Let's play Rock Paper Scissors!");

const controls = document.querySelector('#controls');
const messageArea = document.querySelector('#messageArea');
const humanDisplayedScore = document.querySelector('#humanScore');
const computerDisplayedScore = document.querySelector('#computerScore');

controls.addEventListener('click', (e) => {
  e.stopPropagation();

  if (gameRunning) {
    playRound(e.target.id, getComputerChoice());

    humanDisplayedScore.textContent = `Human score: ${humanScore}`;
    computerDisplayedScore.textContent = `Computer score: ${computerScore}`;
  }

  if (humanScore === 5) {
    updateMessageArea('You win this game!');
    gameRunning = false;
  } else if (computerScore === 5) {
    updateMessageArea('Computer wins this game!');
    gameRunning = false;
  }
});
