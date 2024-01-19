let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generate a random target number
const generateTarget = () => Math.floor(Math.random() * 9 + 1);

// compares guesses to see who is closest to the target
const compareGuesses = (humanGuess, computerGuess, target) => {
  if (Math.abs(humanGuess - target) < Math.abs(computerGuess - target)) {
    return true;
  } else {
    return false;
  }
}

// Increases the winners score
const updateScore = winner => winner === 'human' ? humanScore ++ : computerScore ++;

// Advance the round
const advanceRound = () => currentRoundNumber++;