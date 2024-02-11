// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '
// You are not allowed to use .map()

// array to test
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

// function convertToBaby
const convertToBaby = array => {
  const babyAnimals = []; // Create a new array
  for (let i = 0; i < array.length; i++) { // loop through the array
    babyAnimals.push(`baby ${array[i]}`); // push animal preceeded by the word baby
  }
  return babyAnimals;
}

// log results to the terminal
console.log(convertToBaby(animals));