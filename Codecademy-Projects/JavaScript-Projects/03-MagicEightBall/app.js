// variables
let username = 'Matt';
let eightBall = '';
let userQuestion = 'Will I tidy my room today?';

// Constant variables
const randomNumber = Math.floor(Math.random() * 8);

// Ternary expression to check username and state their question
username ? console.log(`Hello ${username}`) : console.log(`Hello`);
console.log(`${username = username || 'User'} asks: ${userQuestion = userQuestion || 'Nothing'}`);

// Determin answer using switch a statement
// switch (randomNumber) {
//   case 0:
//     eightBall = 'It is certain';
//     break;
//   case 1:
//     eightBall = 'It is decidedly so';
//     break;
//   case 2:
//     eightBall = 'Reply hazy, try again';
//     break;
//   case 3:
//     eightBall = 'Cannot predict now';
//     break;
//   case 4:
//     eightBall = 'Do not count on it';
//     break;
//   case 5:
//     eightBall = 'My sources say no';
//     break;
//   case 6:
//     eightBall = 'Outlook not so good';
//     break;
//   case 7:
//     eightBall = 'Signs point to yes';
//     break;
// }

/* Determin answer using if else statements */
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy, try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
}

// Print the answer to the console
console.log(randomNumber);
console.log(`${eightBall}`);