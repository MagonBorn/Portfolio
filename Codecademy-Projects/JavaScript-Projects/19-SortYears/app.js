// Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order

// function to sort a passed in array of years as numbers and returns the same array with the years sorted in descending order.
const sortYears = arr => {
  return arr.sort((a, b) => b - a);
};

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))