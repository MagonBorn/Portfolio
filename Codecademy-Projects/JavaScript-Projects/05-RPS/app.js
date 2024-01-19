// Function to get user choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput;
  }
};

// Function to determine copmuter choice
const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'scissors';
  } else if (choice ===2) {
    return 'paper';
  }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer wins';
    } else {
      return 'The user wins';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer wins';
    } else {
      return 'The player wins';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins';
    } else {
      return 'the player wins';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log(`The user picked ${userChoice}. The computer picked ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();