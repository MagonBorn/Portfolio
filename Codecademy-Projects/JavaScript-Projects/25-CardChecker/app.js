// Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// -----------------------------------------------------------------------------

const validateCred = arr => {
  // Add the last digit of the passed in array to a new array
  const cardNumber = [arr[arr.length - 1]];

  // If the array has an even number of elements
  if (arr.length % 2 === 0) {
    for (let i = arr.length - 2; i >= 0; i--) {
      // For EVEN indices, double value at index, if 10 of more, subtract 9 - unshift. For ODD indicies, add value at index to array.
      if (i % 2 === 0) {
        arr[i] * 2 > 9 ? cardNumber.unshift(arr[i] * 2 - 9) : cardNumber.unshift(arr[i] * 2)
      } else {
        cardNumber.unshift(arr[i]);
      }
    }
  } else { // If the array has an odd number of elements
    for (let i = arr.length - 2; i >= 0; i--) {
      // For ODD indices, double value at index, if 10 of more, subtract 9 - unshift. For EVEN indicies, add value at index to array.
      if (i % 2 !== 0) {
        arr[i] * 2 > 9 ? cardNumber.unshift(arr[i] * 2 - 9) : cardNumber.unshift(arr[i] * 2)
      } else {
        cardNumber.unshift(arr[i]);
      }
    }
  }
  return cardNumber.reduce((accumulator, currentValue) => accumulator + currentValue) % 10 === 0 ? true : false;
}

// ----------------------------------------------------------------------------
// Function to batch process and find invalid cards
const findInvalidCards = arr => {
  const returnArray = []; // Create new array

  // Loop through each array in the batch; add to return Array if invalid by calling validateCred
  arr.forEach(array => {
    if (validateCred(array) === false) {
      returnArray.push(array)
    }
  });
  return returnArray; // Return all invalid card numbers
};


// ----------------------------------------------------------------------------
// Function to return a list of invalid card issuers
const invalidCardCompanies = arr => {
  const invalidCard = findInvalidCards(arr);
  const firstDigit = [];
  const cardCompanies = [];

  invalidCard.forEach(array => {
    if (!firstDigit.includes(array[0])) {
      firstDigit.push(array[0])
      switch (array[0]) {
        case 3:
          cardCompanies.push(`Amex (American Express)`);
          break;
        case 4:
          cardCompanies.push(`Visa`);
          break;
        case 5:
          cardCompanies.push(`Mastercard`);
          break;
        case 6:
          cardCompanies.push(`Discover`);
          break;
        default:
          console.log(`Company not found`);
      }
    }
  });

  console.log(cardCompanies);
}

// ----------------------------------------------------------------------------
// Function to turn a string into an array of numbers.
const stringToCard = num => {
  const cardNumber = [];
  for (let i = 0; i < num.length; i++) {
    cardNumber.push(parseInt(num[i]));
  }
  return cardNumber;
}

// ----------------------------------------------------------------------------
// Tests

console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));
console.log(`------------------------------------------------------`);
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));
console.log(`------------------------------------------------------`);
console.log(validateCred(mystery1));
console.log(validateCred(mystery2));
console.log(validateCred(mystery3));
console.log(validateCred(mystery4));
console.log(validateCred(mystery5));
console.log(`------------------------------------------------------`);
console.log(findInvalidCards(batch));
console.log(`------------------------------------------------------`);
invalidCardCompanies(batch);
console.log(`------------------------------------------------------`);
console.log(`Visa: 4532539100169925 - ${validateCred(stringToCard(`4532539100169925`))}`); // Visa
console.log(`Discover: 6011156897069658 - ${validateCred(stringToCard(`6011156897069658`))}`); // Discover
console.log(`Diners Club - Carte Blanche: 30170129285248 - ${validateCred(stringToCard(`30170129285248`))}`); // Diners Club - Carte Blanche
console.log(`Visa Electron 4175005576469043 - ${validateCred(stringToCard(`4175005576469043`))}`); // Visa Electron
console.log(`Mastercard: 2221006511111995 - ${validateCred(stringToCard(`2221006511111995`))}`); // Mastercard
console.log(`JCB: 3530533449267320 - ${validateCred(stringToCard(`3530533449267320`))}`); // JCB
console.log(`Diners Club - International: 36735466919049 - ${validateCred(stringToCard(`36735466919049`))}`); // Diners Club - International
console.log(`InstaPayment: 6397905639471000 - ${validateCred(stringToCard(`6397905639471000`))}`); // InstaPayment
console.log(`American Express AMEX: 376795951764290 - ${validateCred(stringToCard(`376795951764290`))}`); // American Express (AMEX)
console.log(`Diners Club - North America: 5494511145257919 - ${validateCred(stringToCard(`5494511145257919`))}`); // Diners Club - North America
console.log(`Maestro: 6761610241964883 - ${validateCred(stringToCard(`6761610241964883`))}`); // Maestro
console.log(`------------------------------------------------------`);