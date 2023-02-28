'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
function displayMessage(message) {
  return (document.querySelector('.message').textContent = message);
}
//document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  console.log(secreteNumber);
  //console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //guess 0
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔No Number!';
    displayMessage('no number⛔');
  }
  //guess is prefect
  else if (guess === secreteNumber) {
    /*document.querySelector('.message').textContent =
      'Congratulations! You guessed right number ....🥳';*/
    displayMessage('Congo right Guess!🥳');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secreteNumber && guess > 0 && guess < 21) {
    if (score > 1) {
      guess > secreteNumber
        ? //(document.querySelector('.message').textContent = 'Too high📈')
          displayMessage('too High!')
        : //(document.querySelector('.message').textContent = 'Too low📉');
          displayMessage('too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost game !💥';
      displayMessage('You Lost The Game💥');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  //guess is high
  else if (guess > secreteNumber && guess < 21 && guess > 0) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high📈'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost game !💥';
      document.querySelector('.score').textContent = 0;
    }
      
  }

  //guess is low
  else if (guess < secreteNumber && guess < 21 && guess > 0) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost game !💥';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
  //invalid guess
  else if (guess > 20 || guess < 0) {
    //document.querySelector('.message').textContent = 'Invalid Number!';
    displayMessage('Invalid Number!');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
