// Write a function: reverseArray(), that takes an array as an argument and returns a new array with the elements in reverse order. you are not allowed to use the built-in .reverse() array method 

// The array to test
const sentence = ['sense.', 'make', 'all', 'will', 'This']

// The reverseArray function
const reverseArray = array => {
  const reverseSentence = []; // Create an array
  array.forEach(word => reverseSentence.unshift(word)) // uses the forEach iterator and a callback function to add each word at the start of the new array
  return reverseSentence; // return the new array
}

console.log(reverseArray(sentence));