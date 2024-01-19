// Variables
let raceNumber = Math.floor(Math.random() * 1000);

// Constant Variables
const registeredEarly = true;
const runnerAge = 19;
let test = 'hello';

// Determine race Number
if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

// Determine race start time
if (registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}, your race begins at 9:30AM`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}, your race begins at 11:00AM`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}, your race begins at 12:30PM`);
} else {
  console.log('Please see the registration desk');
}