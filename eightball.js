// Task #1
let userName = 'Mrunal';

//Task #2
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

//Task #3
const userQuestion = 'How will this work out?';

//Task #4
console.log(`Your question is: ${userQuestion}, correct, ${userName}?`);

//Task #5
randomNumber = Math.floor(Math.random() * 8);

//Task #6
let eightBall = '';

//Task #7
switch (randomNumber) {
  case 0: 
    eightBall = 'It is certain';
  break;
  case 1:
    eightBall = 'It is decidedly so';
  break;
  case 2:
    eightBall = 'Everything is working in your favor.';
  break;
  case 3:
    eightBall = 'You\'re being protected.';
  break;
  case 4:
    eightBall = 'You are on the path to your soft life.';
  break;
  case 5:
    eightBall = 'It is possible because you imagined it.';
  break;
  case 6:
    eightBall = 'More visualization is needed.';
  break;
  case 7:
    eightBall = 'You are on the right path, always.';
  break;
  default:
    eightBall = 'Focus your thoughts and ask again.';
  break;
}

//Task #8
console.log(eightBall);