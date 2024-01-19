// My age in years
let myAge = 37;

// The first 2 human years is equivalent to 10.5 dog years
let earlyYears = 2;
earlyYears *= 10.5;

// The number of adult years of a Dogs life
let laterYears = myAge - 2;
laterYears *= 4;

// My age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// My name in all lowercase
const myName = 'Matthew'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);

console.log(`Early Years: ${earlyYears}`);
console.log(`Later Years: ${laterYears}`);