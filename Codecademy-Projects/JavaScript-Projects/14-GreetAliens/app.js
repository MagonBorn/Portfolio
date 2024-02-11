// Write a function, greetAlient(), that takes in an array of strings and uses a for loop to pring a greeting with each string in the array.
// The greeting should take the following format:
// "Oh powerful [stringElement], we humans offer our unconditional surrender!"
// You're not allowed to use the forEach() iterator

// array to test
const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];

// greetAliens function
const greetAliens = array => {
  for (const alien of array) {
    console.log(`Oh powerful ${alien}, we humans offer our unconditional surrender!`);
  }
}

greetAliens(aliens);