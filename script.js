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

function playGame(numRounds) {
  // scores
  let computerScore = 0;
  let humanScore = 0;

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
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
    case Outcome.LOSE:
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      break;
    case Outcome.TIE:
      console.log(`Uh oh, we both chose ${computerChoice}. This round is a tie!`);
      break;
    }
  }

  for (let i = 0; i < numRounds; i++) {
    playRound( getHumanChoice(), getComputerChoice() );
  }

  // print outcome
  console.log(`After playing ${numRounds} rounds, here's the score:`);
  console.log(`Computer: ${computerScore}`);
  console.log(`Human: ${humanScore}`);
}


// let's play the game

console.log("Let's play Rock Paper Scissors!");
playGame(5);
