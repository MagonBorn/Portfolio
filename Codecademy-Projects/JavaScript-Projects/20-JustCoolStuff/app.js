// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

const justCoolStuff = (arr1, arr2) => {
  return arr1.filter(word => arr2.includes(word));
};

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 


// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
console.log(justCoolStuff(myStuff, coolStuff));
// Should return ['this']
console.log(justCoolStuff(arr1, arr2));