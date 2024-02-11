// Write a function isTheDinnerVegan() that takes in an array of food objects in the format: {name: 'cabbage', source: 'plant'} and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const isTheDinnerVegan = arr => {
  return arr.every(element => element.source === 'plant');
};


const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(`Every mean is vegan: ${isTheDinnerVegan(meal)}`); // Should return true
console.log(`Every meal is vegan: ${isTheDinnerVegan(dinner)}`) // Should return false