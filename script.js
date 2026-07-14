// Rock Paper Scissors game code

// Yeah I know I shouldn't know about this yet...
const Choice = Object.freeze({
  ROCK:     0,
  PAPER:    1,
  SCISSORS: 2
});

// Scores
let computerScore = 0;
let humanScore = 0;

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

function getHumanChoice() {
  let choice = "";
  let validChoice = false;
  let promptStr = "One, two, three... shoot!";

  while(!validChoice) {
    const userInput = prompt(promptStr);

    if (userInput) {
      choice = userInput.toLowerCase();
    } else {
      promptStr = "Oh, you don't feel like playing? Too bad!";
      continue;
    }

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      validChoice = true;
    } else {
      promptStr = "That's not a valid play, you silly goose!";
    }
  }

  return choice;
}
