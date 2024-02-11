// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them. The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline()

// Create test array
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

// politelyDecline function
const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// declineEverything function
const declineEverything = array => {
  array.forEach(politelyDecline);
}

// accept everything function
const acceptEverything = array => {
  array.forEach(veg => console.log(`Ok, I guess I will eat some ${veg}`));
}

declineEverything(veggies);
acceptEverything(veggies);