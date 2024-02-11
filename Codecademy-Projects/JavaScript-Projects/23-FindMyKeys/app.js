// Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

const findMyKeys = arr => {
  return arr.indexOf('keys');
};

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff));
// Should print 4
findMyKeys(drawer);
// Should return -1