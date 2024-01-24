// Initialise phrase to translate
const input = 'turpentine and turtles';
// Initialise whale language
const vowels = ['a', 'e', 'i', 'o', 'u'];
// Initialise empty array
let resultArray = [];

// Iterate over the input phrase
for (let i = 0; i < input.length; i++) {
  // u's and e's are extra long in whale so we need to repeat every instance of them only once.
  if (input[i] == 'e' || input[i] == 'u') {
      resultArray.push(input[i]);
    }
  // If the letter in the input phrase matches the current vowel, push it to the array.
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

// join all the letters in the array and change them to uppercase.
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);