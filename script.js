// Rock Paper Scissors game code

// Yeah I know I shouldn't know about this yet...
const Choice = Object.freeze({
  ROCK:     0,
  PAPER:    1,
  SCISSORS: 2
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
